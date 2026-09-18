/**
 * Sophia & William 专属数学知识图谱跟踪系统 - 交互引擎
 * 协和双语虹桥校区 六年级融合班
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.trackerData;
  if (!data) {
    console.error("Tracker data not found!");
    return;
  }

  // --- App State ---
  const state = {
    currentStudent: "dual", // "dual" | "sophia" | "william"
    currentView: "overview", // "overview" | "graph" | "errors" | "roadmap"
    graphDomainFilter: "all",
    errorStudentFilter: "all",
    errorCategoryFilter: "all",
    errorSearchQuery: "",
    selectedNodeId: null,
    graphTransform: { x: 40, y: 30, scale: 0.9 },
    isDragging: false,
    dragStart: { x: 0, y: 0 }
  };

  // Pre-calculate positions for the 20 nodes
  const nodePositions = {
    // Stage 1: Number Basics & Place Value (Col 1: x = 120)
    pv_01: { x: 120, y: 140 },
    pv_02: { x: 120, y: 280 },
    pv_03: { x: 120, y: 420 },
    pv_04: { x: 120, y: 560 },

    // Stage 2: Number Theory & Divisibility (Col 2: x = 400)
    div_01: { x: 400, y: 100 },
    div_02: { x: 400, y: 220 },
    div_03: { x: 400, y: 340 },
    div_04: { x: 400, y: 460 },
    div_05: { x: 400, y: 580 },
    div_06: { x: 400, y: 700 },

    // Stage 3: Fractions Operations (Col 3: x = 700)
    div_07: { x: 680, y: 120 },
    frac_01: { x: 700, y: 260 },
    frac_02: { x: 700, y: 380 },
    frac_03: { x: 700, y: 500 },
    frac_04: { x: 700, y: 640 },
    frac_05: { x: 700, y: 770 },

    // Stage 4: Ratios & Advanced Topics (Col 4: x = 980)
    adv_01: { x: 980, y: 140 },
    adv_02: { x: 980, y: 280 },
    rat_01: { x: 980, y: 450 },
    rat_02: { x: 980, y: 600 }
  };

  // --- Initialization ---
  initNavigation();
  initStudentSwitcher();
  renderOverview();
  renderGraph();
  renderErrors();
  renderRoadmap();

  // Try to render KaTeX formulas if library loaded
  renderAllMath();

  // -------------------------------------------------------------
  // 1. Navigation & View Switcher
  // -------------------------------------------------------------
  function initNavigation() {
    const navTabs = document.querySelectorAll(".nav-tab");
    navTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        navTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const targetView = tab.dataset.view;
        state.currentView = targetView;

        document.querySelectorAll(".view-panel").forEach(panel => {
          panel.classList.remove("active");
        });
        const targetPanel = document.getElementById(`view-${targetView}`);
        if (targetPanel) {
          targetPanel.classList.add("active");
        }

        if (targetView === "overview") {
          renderRadarChart();
          renderTrendChart();
        } else if (targetView === "graph") {
          updateGraphVisuals();
        }
        renderAllMath();
      });
    });
  }

  // -------------------------------------------------------------
  // 2. Student Switcher
  // -------------------------------------------------------------
  function initStudentSwitcher() {
    const studentBtns = document.querySelectorAll(".student-btn");
    studentBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        studentBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.currentStudent = btn.dataset.student;

        // Update indicator label on graph
        const targetLabel = document.getElementById("graph-view-target-label");
        if (targetLabel) {
          if (state.currentStudent === "sophia") {
            targetLabel.innerHTML = "<span style='color: var(--sophia-color);'>🌸 Sophia 个人掌握图谱</span>";
          } else if (state.currentStudent === "william") {
            targetLabel.innerHTML = "<span style='color: var(--william-color);'>⚡ William 个人掌握图谱</span>";
          } else {
            targetLabel.innerHTML = "<span style='color: var(--primary);'>👥 双人综合对比图谱</span>";
          }
        }

        updateGraphVisuals();
        renderErrors();
        renderAllMath();
      });
    });
  }

  // -------------------------------------------------------------
  // 3. Overview View Rendering
  // -------------------------------------------------------------
  function renderOverview() {
    // Render Sophia & William lists
    const sophiaStrengths = document.getElementById("sophia-strengths-list");
    if (sophiaStrengths) {
      sophiaStrengths.innerHTML = data.students.sophia.strengths.map(s => `<li>${s}</li>`).join("");
    }
    const sophiaWeaknesses = document.getElementById("sophia-weaknesses-list");
    if (sophiaWeaknesses) {
      sophiaWeaknesses.innerHTML = data.students.sophia.weaknesses.map(w => `<li>${w}</li>`).join("");
    }

    const williamStrengths = document.getElementById("william-strengths-list");
    if (williamStrengths) {
      williamStrengths.innerHTML = data.students.william.strengths.map(s => `<li>${s}</li>`).join("");
    }
    const williamWeaknesses = document.getElementById("william-weaknesses-list");
    if (williamWeaknesses) {
      williamWeaknesses.innerHTML = data.students.william.weaknesses.map(w => `<li>${w}</li>`).join("");
    }

    // Render Mutual dynamics
    const dynamicsGrid = document.getElementById("mutual-dynamics-grid");
    if (dynamicsGrid) {
      dynamicsGrid.innerHTML = data.mutualAnalysis.dynamics.map(d => `
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px;">
          <div style="font-size: 14px; font-weight: 700; color: var(--primary); margin-bottom: 6px;">🎯 ${d.tag}</div>
          <div style="font-size: 13px; color: var(--text-sub);">${d.desc}</div>
        </div>
      `).join("");
    }
    const recText = document.getElementById("mutual-recommendation-text");
    if (recText) {
      recText.innerHTML = data.mutualAnalysis.recommendations.join(" ");
    }

    // Render charts
    setTimeout(() => {
      renderRadarChart();
      renderTrendChart();
    }, 100);
  }

  // Radar Chart on Canvas
  function renderRadarChart() {
    const canvas = document.getElementById("radarCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 45;

    const labels = [
      "运算流畅度\n(Fluency)",
      "概念严谨性\n(Concepts)",
      "空间代数建模\n(Modeling)",
      "步骤规范度\n(Discipline)",
      "专注持久力\n(Focus)"
    ];
    const keys = ["numericalFluency", "conceptualRigor", "spatialAlgebraic", "stepDiscipline", "focusEndurance"];
    const totalAxes = labels.length;
    const angleStep = (Math.PI * 2) / totalAxes;

    ctx.clearRect(0, 0, width, height);

    // Draw background concentric web
    const levels = 5;
    for (let l = 1; l <= levels; l++) {
      const r = (radius / levels) * l;
      ctx.beginPath();
      for (let i = 0; i < totalAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = l === levels ? "#cbd5e1" : "#e2e8f0";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axis lines and labels
    ctx.font = "12px sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < totalAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "#cbd5e1";
      ctx.stroke();

      // Label text
      const labelDistance = radius + 22;
      const lx = centerX + labelDistance * Math.cos(angle);
      const ly = centerY + labelDistance * Math.sin(angle);
      const lines = labels[i].split("\n");
      lines.forEach((l, idx) => {
        ctx.fillText(l, lx, ly + (idx - 0.5) * 14);
      });
    }

    // Draw student polygon helper
    function drawPolygon(studentData, strokeColor, fillColor) {
      ctx.beginPath();
      for (let i = 0; i < totalAxes; i++) {
        const val = studentData[keys[i]] || 50;
        const r = (radius * (val / 100));
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Draw dots
      for (let i = 0; i < totalAxes; i++) {
        const val = studentData[keys[i]] || 50;
        const r = (radius * (val / 100));
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = strokeColor;
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    // Sophia (Magenta)
    drawPolygon(data.students.sophia.radar, "#ec4899", "rgba(236, 72, 153, 0.25)");
    // William (Blue)
    drawPolygon(data.students.william.radar, "#3b82f6", "rgba(59, 130, 246, 0.22)");
  }

  // Trend Chart on Canvas
  function renderTrendChart() {
    const canvas = document.getElementById("trendCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = { top: 25, right: 30, bottom: 40, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    ctx.clearRect(0, 0, width, height);

    // Draw Y Axis grid lines (0%, 20%, 40%, 60%, 80%, 100%)
    ctx.font = "11px sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";

    for (let pct = 0; pct <= 100; pct += 20) {
      const y = padding.top + chartH - (pct / 100) * chartH;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.strokeStyle = pct === 0 ? "#94a3b8" : "#f1f5f9";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillText(`${pct}%`, padding.left - 8, y);
    }

    const sTrend = data.students.sophia.trend;
    const wTrend = data.students.william.trend;
    const pointsCount = sTrend.length;
    const xStep = chartW / (pointsCount - 1);

    // Draw Phase Separator bands (Spring, Summer, Autumn)
    const phases = [
      { start: 0, end: 4, name: "26春基础拔高" },
      { start: 5, end: 14, name: "26暑期预备攻坚" },
      { start: 15, end: 16, name: "26秋开学" }
    ];

    phases.forEach(p => {
      const x1 = padding.left + p.start * xStep;
      const x2 = padding.left + p.end * xStep;
      ctx.fillStyle = p.name.includes("秋") ? "rgba(236, 72, 153, 0.06)" : "rgba(241, 245, 249, 0.5)";
      ctx.fillRect(x1 - xStep * 0.4, padding.top, (x2 - x1) + xStep * 0.8, chartH);
      ctx.font = "10px sans-serif";
      ctx.fillStyle = "#94a3b8";
      ctx.textAlign = "center";
      ctx.fillText(p.name, (x1 + x2) / 2, padding.top - 10);
    });

    // Draw Line helper
    function drawLine(trendData, color) {
      ctx.beginPath();
      trendData.forEach((pt, i) => {
        const x = padding.left + i * xStep;
        const y = padding.top + chartH - (pt.score / 100) * chartH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Points
      trendData.forEach((pt, i) => {
        const x = padding.left + i * xStep;
        const y = padding.top + chartH - (pt.score / 100) * chartH;
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    drawLine(sTrend, "#ec4899");
    drawLine(wTrend, "#3b82f6");

    // X Axis key labels
    ctx.fillStyle = "#64748b";
    ctx.textAlign = "center";
    ctx.font = "10px sans-serif";
    [0, 4, 5, 9, 14, 15, 16].forEach(idx => {
      const x = padding.left + idx * xStep;
      ctx.fillText(sTrend[idx].label, x, height - padding.bottom + 16);
    });
  }

  // -------------------------------------------------------------
  // 4. Interactive Knowledge Graph Engine (SVG)
  // -------------------------------------------------------------
  function renderGraph() {
    const svg = document.getElementById("knowledge-graph-svg");
    const container = document.getElementById("graph-container");
    if (!svg || !container) return;

    // Filter pills
    const domainPills = document.querySelectorAll(".graph-control-bar .pill-btn[data-domain]");
    domainPills.forEach(btn => {
      btn.addEventListener("click", () => {
        domainPills.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.graphDomainFilter = btn.dataset.domain;
        updateGraphVisuals();
      });
    });

    // Zoom Controls
    document.getElementById("btn-zoom-in").addEventListener("click", () => {
      state.graphTransform.scale = Math.min(state.graphTransform.scale * 1.2, 2.5);
      applyGraphTransform();
    });
    document.getElementById("btn-zoom-out").addEventListener("click", () => {
      state.graphTransform.scale = Math.max(state.graphTransform.scale / 1.2, 0.4);
      applyGraphTransform();
    });
    document.getElementById("btn-reset-zoom").addEventListener("click", () => {
      state.graphTransform = { x: 40, y: 30, scale: 0.9 };
      applyGraphTransform();
    });

    // Drag & Pan
    container.addEventListener("mousedown", (e) => {
      if (e.target.closest(".graph-node")) return;
      state.isDragging = true;
      state.dragStart = { x: e.clientX - state.graphTransform.x, y: e.clientY - state.graphTransform.y };
    });

    window.addEventListener("mousemove", (e) => {
      if (!state.isDragging) return;
      state.graphTransform.x = e.clientX - state.dragStart.x;
      state.graphTransform.y = e.clientY - state.dragStart.y;
      applyGraphTransform();
    });

    window.addEventListener("mouseup", () => {
      state.isDragging = false;
    });

    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      state.graphTransform.scale = Math.max(0.4, Math.min(2.5, state.graphTransform.scale * zoomFactor));
      applyGraphTransform();
    });

    // Build Graph Layout Coordinates
    buildGraphLayout();
    applyGraphTransform();
  }

  function buildGraphLayout() {
    const svg = document.getElementById("knowledge-graph-svg");
    if (!svg) return;

    svg.innerHTML = `
      <defs>
        <!-- Marker arrows -->
        <marker id="arrow" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8" />
        </marker>
        <marker id="arrow-active" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#4f46e5" />
        </marker>
        <!-- Drop shadows -->
        <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.12"/>
        </filter>
        <filter id="node-selected-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#ec4899" flood-opacity="0.6"/>
        </filter>
      </defs>
      <g id="graph-main-group"></g>
    `;

    const mainGroup = document.getElementById("graph-main-group");

    // 1. Draw Links
    const linksGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    linksGroup.id = "graph-links";

    data.knowledgeNodes.forEach(node => {
      const targetPos = nodePositions[node.id];
      if (!targetPos) return;

      node.prerequisites.forEach(preId => {
        const srcPos = nodePositions[preId];
        if (!srcPos) return;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const dx = targetPos.x - srcPos.x;
        const curX1 = srcPos.x + dx * 0.45;
        const curX2 = targetPos.x - dx * 0.45;
        const d = `M ${srcPos.x} ${srcPos.y} C ${curX1} ${srcPos.y}, ${curX2} ${targetPos.y}, ${targetPos.x} ${targetPos.y}`;

        path.setAttribute("d", d);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "#cbd5e1");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("stroke-dasharray", "4 2");
        path.setAttribute("marker-end", "url(#arrow)");
        path.dataset.source = preId;
        path.dataset.target = node.id;
        path.classList.add("graph-link");

        linksGroup.appendChild(path);
      });
    });
    mainGroup.appendChild(linksGroup);

    // 2. Draw Nodes
    const nodesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    nodesGroup.id = "graph-nodes";

    data.knowledgeNodes.forEach(node => {
      const pos = nodePositions[node.id] || { x: 100, y: 100 };
      const domain = data.knowledgeDomains.find(d => d.id === node.domain);

      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.classList.add("graph-node");
      g.dataset.nodeId = node.id;
      g.dataset.domain = node.domain;
      g.setAttribute("transform", `translate(${pos.x}, ${pos.y})`);
      g.setAttribute("filter", "url(#node-glow)");
      g.style.cursor = "pointer";

      // Node base circle
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("r", "24");
      circle.setAttribute("fill", "#ffffff");
      circle.setAttribute("stroke", domain ? domain.color : "#4f46e5");
      circle.setAttribute("stroke-width", "3.5");
      circle.classList.add("node-circle");
      g.appendChild(circle);

      // Mastery status ring / badge
      const statusBadge = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      statusBadge.setAttribute("cx", "16");
      statusBadge.setAttribute("cy", "-16");
      statusBadge.setAttribute("r", "9");
      statusBadge.classList.add("node-status-badge");
      g.appendChild(statusBadge);

      // Domain Icon inside circle
      const iconText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      iconText.setAttribute("text-anchor", "middle");
      iconText.setAttribute("dy", "5");
      iconText.setAttribute("font-size", "15");
      iconText.textContent = domain ? domain.icon : "•";
      g.appendChild(iconText);

      // Node Label (Title)
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("dy", "42");
      label.setAttribute("font-size", "12.5");
      label.setAttribute("font-weight", "700");
      label.setAttribute("fill", "#1e293b");
      label.textContent = node.title;
      g.appendChild(label);

      // Bilingual sub-label
      const subLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
      subLabel.setAttribute("text-anchor", "middle");
      subLabel.setAttribute("dy", "56");
      subLabel.setAttribute("font-size", "10");
      subLabel.setAttribute("fill", "#64748b");
      subLabel.textContent = node.bilingual.split("(")[0].split("/")[0].slice(0, 18);
      g.appendChild(subLabel);

      // Node Click Event -> Open Drawer
      g.addEventListener("click", (e) => {
        e.stopPropagation();
        selectNode(node.id);
      });

      nodesGroup.appendChild(g);
    });
    mainGroup.appendChild(nodesGroup);
  }

  function applyGraphTransform() {
    const mainGroup = document.getElementById("graph-main-group");
    if (!mainGroup) return;
    mainGroup.setAttribute("transform", `translate(${state.graphTransform.x}, ${state.graphTransform.y}) scale(${state.graphTransform.scale})`);
  }

  // Update mastery colors & active domain filters
  function updateGraphVisuals() {
    const nodeElements = document.querySelectorAll(".graph-node");
    const linkElements = document.querySelectorAll(".graph-link");

    nodeElements.forEach(g => {
      const nodeId = g.dataset.nodeId;
      const node = data.knowledgeNodes.find(n => n.id === nodeId);
      if (!node) return;

      // Check Domain Filter
      if (state.graphDomainFilter !== "all" && node.domain !== state.graphDomainFilter) {
        g.style.opacity = "0.15";
      } else {
        g.style.opacity = "1";
      }

      // Check Selected Status
      if (state.selectedNodeId === nodeId) {
        g.setAttribute("filter", "url(#node-selected-glow)");
      } else {
        g.setAttribute("filter", "url(#node-glow)");
      }

      // Update Mastery Badge
      const badge = g.querySelector(".node-status-badge");
      if (badge) {
        let status = "upcoming";
        if (state.currentStudent === "sophia") {
          status = node.sophiaMastery;
        } else if (state.currentStudent === "william") {
          status = node.williamMastery;
        } else {
          // Dual: if both mastered -> mastered, if any needs_work -> needs_work
          if (node.sophiaMastery === "needs_work" || node.williamMastery === "needs_work") {
            status = "needs_work";
          } else if (node.sophiaMastery === "mastered" && node.williamMastery === "mastered") {
            status = "mastered";
          } else if (node.sophiaMastery === "proficient" || node.williamMastery === "proficient") {
            status = "proficient";
          } else {
            status = "upcoming";
          }
        }

        const colorMap = {
          mastered: "var(--mastered)",
          proficient: "var(--proficient)",
          needs_work: "var(--needs-work)",
          upcoming: "var(--upcoming)"
        };
        badge.setAttribute("fill", colorMap[status] || "#94a3b8");
        badge.setAttribute("stroke", "#ffffff");
        badge.setAttribute("stroke-width", "2");
      }
    });

    // Update Links Highlight
    linkElements.forEach(link => {
      if (state.selectedNodeId) {
        if (link.dataset.source === state.selectedNodeId || link.dataset.target === state.selectedNodeId) {
          link.setAttribute("stroke", "var(--primary)");
          link.setAttribute("stroke-width", "3");
          link.setAttribute("marker-end", "url(#arrow-active)");
          link.style.opacity = "1";
        } else {
          link.setAttribute("stroke", "#cbd5e1");
          link.setAttribute("stroke-width", "2");
          link.setAttribute("marker-end", "url(#arrow)");
          link.style.opacity = "0.3";
        }
      } else {
        link.setAttribute("stroke", "#cbd5e1");
        link.setAttribute("stroke-width", "2");
        link.setAttribute("marker-end", "url(#arrow)");
        link.style.opacity = "0.7";
      }
    });
  }

  // Node Selection & Slide-in Drawer
  function selectNode(nodeId) {
    state.selectedNodeId = nodeId;
    updateGraphVisuals();

    const node = data.knowledgeNodes.find(n => n.id === nodeId);
    if (!node) return;

    const drawer = document.getElementById("node-drawer");
    const overlay = document.getElementById("drawer-overlay");
    const content = document.getElementById("drawer-content");

    const domain = data.knowledgeDomains.find(d => d.id === node.domain);

    // Get linked errors
    const linkedErrors = data.errorBank.filter(e => e.nodeId === nodeId);

    content.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <span style="font-size: 20px;">${domain ? domain.icon : "•"}</span>
        <span class="tag category-tag">${domain ? domain.name : ""}</span>
        <span class="tag" style="background: ${node.currentPhase === 'completed' ? '#dcfce7; color: #15803d;' : node.currentPhase === 'current' ? '#fee2e2; color: #b91c1c;' : '#f1f5f9; color: #64748b;'}">
          ${node.currentPhase === 'completed' ? '已学完' : node.currentPhase === 'current' ? '开学半个月正学' : '后续阶段'}
        </span>
      </div>

      <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 4px;">${node.title}</h2>
      <div style="font-size: 13.5px; color: var(--text-muted); margin-bottom: 16px;">${node.bilingual}</div>

      <!-- Curriculum Mapping Badges -->
      <div class="curriculum-badges">
        <div class="curriculum-badge-row">
          <strong>沪教版章节:</strong>
          <span>${node.shanghaiChapter}</span>
        </div>
        <div class="curriculum-badge-row">
          <strong>英数教材:</strong>
          <span>${node.englishChapter}</span>
        </div>
        <div class="curriculum-badge-row">
          <strong>双语核心词:</strong>
          <span>${node.terms.join("、 ")}</span>
        </div>
      </div>

      <div style="margin: 16px 0; font-size: 14px; line-height: 1.6; color: var(--text-sub); background: var(--bg-subtle); padding: 12px 14px; border-radius: var(--radius-md);">
        <strong>核心概念与考点要求：</strong><br>
        ${node.description}
      </div>

      <!-- Student Mastery Breakdown -->
      <h4 style="font-size: 15px; font-weight: 700; margin: 18px 0 10px;">👥 双人掌握度对比与学情评价：</h4>
      
      <!-- Sophia Box -->
      <div style="background: var(--sophia-light); border: 1px solid #fbcfe8; border-radius: var(--radius-md); padding: 14px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <strong style="color: var(--sophia-color); font-size: 15px;">🌸 Sophia</strong>
          <span style="font-weight: 700; font-size: 13px; color: ${node.sophiaMastery === 'mastered' ? 'var(--mastered)' : node.sophiaMastery === 'proficient' ? 'var(--proficient)' : 'var(--needs-work)'};">
            ${node.sophiaMastery === 'mastered' ? '★ 熟练掌握 (' + node.sophiaScore + '分)' : node.sophiaMastery === 'proficient' ? '☆ 掌握良好 (' + node.sophiaScore + '分)' : '△ 亟待攻坚 (' + node.sophiaScore + '分)'}
          </span>
        </div>
        <div style="font-size: 13px; color: #831843;">${node.sophiaNote}</div>
      </div>

      <!-- William Box -->
      <div style="background: var(--william-light); border: 1px solid #bfdbfe; border-radius: var(--radius-md); padding: 14px; margin-bottom: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <strong style="color: var(--william-color); font-size: 15px;">⚡ William</strong>
          <span style="font-weight: 700; font-size: 13px; color: ${node.williamMastery === 'mastered' ? 'var(--mastered)' : node.williamMastery === 'proficient' ? 'var(--proficient)' : 'var(--needs-work)'};">
            ${node.williamMastery === 'mastered' ? '★ 熟练掌握 (' + node.williamScore + '分)' : node.williamMastery === 'proficient' ? '☆ 掌握良好 (' + node.williamScore + '分)' : '△ 亟待攻坚 (' + node.williamScore + '分)'}
          </span>
        </div>
        <div style="font-size: 13px; color: #1e3a8a;">${node.williamNote}</div>
      </div>

      <!-- Linked Errors in Error Bank -->
      <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 10px;">📕 关联经典错题 (${linkedErrors.length}题)：</h4>
      ${linkedErrors.length === 0 ? '<div style="font-size: 13px; color: var(--text-muted);">本知识点暂无收录历史重度错题。</div>' : linkedErrors.map(err => `
        <div style="border: 1px solid var(--border-color); border-left: 4px solid ${err.category.includes('概念') ? '#ec4899' : '#f59e0b'}; border-radius: var(--radius-sm); padding: 10px 12px; margin-bottom: 10px; background: #fff;">
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span class="tag ${err.student === 'Sophia' ? 'student-sophia' : 'student-william'}">${err.student}</span>
            <span style="color: var(--text-muted);">${err.source}</span>
          </div>
          <div style="font-size: 13px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">${err.title}</div>
          <button class="pill-btn jump-to-error-btn" data-err-id="${err.id}" style="padding: 3px 8px; font-size: 11.5px; margin-top: 4px;">查看完整错因与名师解析 →</button>
        </div>
      `).join("")}
    `;

    drawer.classList.add("open");
    overlay.classList.add("open");

    // Jump to error button
    content.querySelectorAll(".jump-to-error-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        closeDrawer();
        const errId = btn.dataset.errId;
        // switch tab
        document.querySelector('.nav-tab[data-view="errors"]').click();
        setTimeout(() => {
          const card = document.getElementById(`card-${errId}`);
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            card.style.boxShadow = "0 0 0 3px var(--primary)";
            setTimeout(() => { card.style.boxShadow = ""; }, 2000);
          }
        }, 150);
      });
    });

    renderAllMath();
  }

  function closeDrawer() {
    document.getElementById("node-drawer").classList.remove("open");
    document.getElementById("drawer-overlay").classList.remove("open");
    state.selectedNodeId = null;
    updateGraphVisuals();
  }

  document.getElementById("drawer-close-btn").addEventListener("click", closeDrawer);
  document.getElementById("drawer-overlay").addEventListener("click", closeDrawer);

  // -------------------------------------------------------------
  // 5. Error Bank Rendering & Filter System
  // -------------------------------------------------------------
  function renderErrors() {
    const container = document.getElementById("error-list-container");
    if (!container) return;

    // Filters Setup
    const studentPills = document.querySelectorAll(".graph-control-bar .pill-btn[data-err-student]");
    studentPills.forEach(btn => {
      btn.addEventListener("click", () => {
        studentPills.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.errorStudentFilter = btn.dataset.errStudent;
        renderFilteredErrors();
      });
    });

    const catPills = document.querySelectorAll(".graph-control-bar .pill-btn[data-err-cat]");
    catPills.forEach(btn => {
      btn.addEventListener("click", () => {
        catPills.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.errorCategoryFilter = btn.dataset.errCat;
        renderFilteredErrors();
      });
    });

    const searchInput = document.getElementById("error-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.errorSearchQuery = e.target.value.trim().toLowerCase();
        renderFilteredErrors();
      });
    }

    renderFilteredErrors();
  }

  function renderFilteredErrors() {
    const container = document.getElementById("error-list-container");
    if (!container) return;

    let list = data.errorBank;

    // Filter by student
    if (state.errorStudentFilter !== "all") {
      list = list.filter(e => e.student.toLowerCase() === state.errorStudentFilter.toLowerCase());
    }

    // Filter by category
    if (state.errorCategoryFilter !== "all") {
      list = list.filter(e => e.category === state.errorCategoryFilter);
    }

    // Filter by search query
    if (state.errorSearchQuery) {
      const q = state.errorSearchQuery;
      list = list.filter(e => 
        e.title.toLowerCase().includes(q) ||
        e.originalQuestion.toLowerCase().includes(q) ||
        e.rootCause.toLowerCase().includes(q) ||
        e.studentAnswer.toLowerCase().includes(q) ||
        e.teacherTip.toLowerCase().includes(q)
      );
    }

    // Update badge count
    const badge = document.getElementById("error-count-badge");
    if (badge) badge.textContent = list.length;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="card" style="text-align: center; padding: 48px; color: var(--text-muted);">
          <div style="font-size: 32px; margin-bottom: 10px;">🔍</div>
          <div style="font-size: 16px; font-weight: 600;">未找到符合筛选条件的错题</div>
          <div style="font-size: 13px; margin-top: 4px;">可尝试切换学生、错误分类或清空搜索关键词</div>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(err => {
      const catClass = err.category.includes("概念") ? "cat-concept" :
                       err.category.includes("计算") ? "cat-calc" :
                       err.category.includes("算法") ? "cat-algorithm" : "cat-modeling";
      const studentClass = err.student === "Sophia" ? "student-sophia" : "student-william";
      const node = data.knowledgeNodes.find(n => n.id === err.nodeId);

      return `
        <article class="error-card ${catClass}" id="card-${err.id}">
          <div class="error-header">
            <div class="error-meta-tags">
              <span class="tag ${studentClass}">${err.student}</span>
              <span class="tag category-tag">${err.category}</span>
              <span class="tag" style="background: #e0e7ff; color: #3730a3;">${node ? node.title : ""}</span>
            </div>
            <div style="font-size: 12px; color: var(--text-muted);">
              来源：${err.source}
            </div>
          </div>

          <h3 class="error-title">${err.title}</h3>

          <div style="margin-bottom: 12px; font-size: 14px;">
            <strong style="color: var(--text-main);">【原题呈现】：</strong>
            <div style="margin-top: 4px; color: var(--text-sub);">${escapeHtml(err.originalQuestion)}</div>
          </div>

          <div class="error-block">
            <strong>❌ 学生错解 / 课堂真实答题表现：</strong>
            <div style="margin-top: 4px;">${escapeHtml(err.studentAnswer)}</div>
          </div>

          <div class="root-cause-block">
            <strong>🔬 深度错因病灶诊断：</strong>
            <div style="margin-top: 4px;">${escapeHtml(err.rootCause)}</div>
          </div>

          <div class="solution-accordion">
            <h5>✅ 名师标准解答与推导演算：</h5>
            <div style="line-height: 1.6; white-space: pre-line;">${escapeHtml(err.standardSolution)}</div>
            <div class="teacher-tip">${escapeHtml(err.teacherTip)}</div>
          </div>

          <div style="margin-top: 12px; display: flex; justify-content: flex-end;">
            <button class="pill-btn locate-node-btn" data-node-id="${err.nodeId}" style="font-size: 12px; padding: 4px 12px;">
              📍 在知识图谱中定位此考点
            </button>
          </div>
        </article>
      `;
    }).join("");

    // Add locate node button handlers
    container.querySelectorAll(".locate-node-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const nodeId = btn.dataset.nodeId;
        document.querySelector('.nav-tab[data-view="graph"]').click();
        setTimeout(() => {
          selectNode(nodeId);
        }, 150);
      });
    });

    renderAllMath();
  }

  // -------------------------------------------------------------
  // 6. Roadmap & Action Plans View
  // -------------------------------------------------------------
  function renderRoadmap() {
    const summaryText = document.getElementById("current-phase-summary-text");
    if (summaryText) summaryText.textContent = data.actionPlans.currentPhaseSummary;

    // Render Timeline
    const timelineContainer = document.getElementById("roadmap-timeline-container");
    if (timelineContainer) {
      timelineContainer.innerHTML = data.actionPlans.roadmap.map(item => `
        <div class="timeline-step ${item.status}">
          <div class="timeline-dot"></div>
          <div class="card" style="padding: 16px 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
              <h4 style="font-size: 16px; font-weight: 800; color: var(--text-main);">${item.week}</h4>
              <span class="tag" style="background: ${item.status === 'completed' ? '#dcfce7; color: #15803d;' : item.status === 'current' ? '#fee2e2; color: #b91c1c;' : '#f1f5f9; color: #64748b;'}">
                ${item.status === 'completed' ? '已完成' : item.status === 'current' ? '当前攻坚阶段（开学半个月）' : '后续规划'}
              </span>
            </div>

            <div class="grid-3" style="gap: 12px; font-size: 13px; margin-bottom: 10px;">
              <div style="background: var(--bg-subtle); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong>📘 沪教版体系:</strong><br>${item.shanghaiTopic}
              </div>
              <div style="background: var(--bg-subtle); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong>📗 英数教材:</strong><br>${item.englishTopic}
              </div>
              <div style="background: var(--bg-subtle); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong>📙 校本思维拓展:</strong><br>${item.schoolBasedTopic}
              </div>
            </div>

            <div style="font-size: 13px; color: var(--text-sub); border-top: 1px dashed var(--border-color); padding-top: 8px;">
              <strong>🎯 目标考核与达成要求：</strong> ${item.assessment}
            </div>
          </div>
        </div>
      `).join("");
    }

    // Render Sophia Actions
    const sophiaActions = document.getElementById("sophia-actions-container");
    if (sophiaActions) {
      sophiaActions.innerHTML = data.actionPlans.sophiaPlan.map(act => `
        <div class="action-card ${act.priority === '高' || act.priority === '极高' ? 'high-priority' : 'medium-priority'}">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <strong style="color: var(--text-main); font-size: 14px;">${act.area}</strong>
            <span class="priority-tag">优先级: ${act.priority}</span>
          </div>
          <div style="font-size: 13px; color: var(--text-sub); margin-top: 6px;">${act.action}</div>
        </div>
      `).join("");
    }

    // Render William Actions
    const williamActions = document.getElementById("william-actions-container");
    if (williamActions) {
      williamActions.innerHTML = data.actionPlans.williamPlan.map(act => `
        <div class="action-card ${act.priority === '高' || act.priority === '极高' ? 'high-priority' : 'medium-priority'}">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <strong style="color: var(--text-main); font-size: 14px;">${act.area}</strong>
            <span class="priority-tag">优先级: ${act.priority}</span>
          </div>
          <div style="font-size: 13px; color: var(--text-sub); margin-top: 6px;">${act.action}</div>
        </div>
      `).join("");
    }
  }

  // Helper: Escape HTML
  function escapeHtml(text) {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Render Math with KaTeX
  function renderAllMath() {
    if (typeof renderMathInElement === "function") {
      try {
        renderMathInElement(document.body, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      } catch(e) {
        console.warn("KaTeX render notice:", e);
      }
    }
  }
});
