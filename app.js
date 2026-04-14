const apps = [
  // ── NLP ──────────────────────────────────────────
  { id: 1, title: "Sentiment Analyzer API", desc: "Build a REST API that classifies text sentiment (positive/negative/neutral) using a fine-tuned transformer model. Deploy with FastAPI and add batch processing.", tags: ["nlp"], difficulty: 2 },
  { id: 2, title: "Named Entity Recognition Service", desc: "Train a custom NER model on domain-specific data (medical, legal, or finance). Serve it via gRPC with sub-50ms latency.", tags: ["nlp"], difficulty: 3 },
  { id: 3, title: "Multi-Language Translator", desc: "Create a translation pipeline supporting 10+ languages with automatic language detection, back-translation quality scoring, and caching.", tags: ["nlp"], difficulty: 3 },
  { id: 4, title: "Text Summarization Engine", desc: "Build an abstractive summarizer with controllable length, keyword preservation, and hallucination detection metrics.", tags: ["nlp"], difficulty: 3 },
  { id: 5, title: "Spam & Toxicity Classifier", desc: "Develop a real-time content moderation system with multi-label classification for toxicity types and confidence thresholds.", tags: ["nlp"], difficulty: 2 },
  { id: 6, title: "Resume Parser & Skill Extractor", desc: "Parse PDF resumes, extract structured data (skills, experience, education), and match against job descriptions using semantic similarity.", tags: ["nlp"], difficulty: 3 },
  { id: 7, title: "Intent Classification Chatbot", desc: "Build a context-aware conversational bot with intent detection, slot filling, dialogue management, and multi-turn memory.", tags: ["nlp"], difficulty: 3 },
  { id: 8, title: "Topic Modeling & Trend Tracker", desc: "Implement LDA/BERTopic pipeline that processes document streams, identifies emerging topics, and visualizes trend shifts over time.", tags: ["nlp", "data"], difficulty: 4 },

  // ── Computer Vision ──────────────────────────────
  { id: 9, title: "Object Detection Pipeline", desc: "Train YOLO/vision transformer on a custom dataset with data augmentation, export to ONNX, and serve at 30+ FPS on edge.", tags: ["cv"], difficulty: 3 },
  { id: 10, title: "Real-Time Face Recognition System", desc: "Build an end-to-end face detection, alignment, and identification pipeline with liveness detection and GDPR-compliant data handling.", tags: ["cv"], difficulty: 4 },
  { id: 11, title: "OCR Document Scanner", desc: "Create a document digitization tool with layout analysis, multi-column reading order, table extraction, and confidence scoring.", tags: ["cv"], difficulty: 3 },
  { id: 12, title: "Image Segmentation Editor", desc: "Develop an interactive segmentation tool (SAM-based) where users click to refine masks, export annotations, and fine-tune on custom data.", tags: ["cv"], difficulty: 4 },
  { id: 13, title: "Visual Search Engine", desc: "Build a reverse image search system using CLIP embeddings, FAISS indexing for million-scale retrieval, and a responsive web UI.", tags: ["cv", "infra"], difficulty: 4 },
  { id: 14, title: "Video Action Recognizer", desc: "Implement temporal action detection in video streams using 3D CNNs or video transformers with real-time visualization overlay.", tags: ["cv"], difficulty: 4 },
  { id: 15, title: "Medical Image Classifier", desc: "Fine-tune a vision model on chest X-rays or pathology slides with class activation maps, uncertainty estimation, and clinical report generation.", tags: ["cv"], difficulty: 5 },
  { id: 16, title: "Autonomous Driving Perception Stack", desc: "Build a multi-task perception system combining object detection, depth estimation, and lane segmentation from dashcam data.", tags: ["cv"], difficulty: 5 },

  // ── Generative AI ────────────────────────────────
  { id: 17, title: "RAG-Powered Knowledge Assistant", desc: "Build a retrieval-augmented generation system with document ingestion, vector search, re-ranking, citation tracking, and source attribution.", tags: ["genai"], difficulty: 3 },
  { id: 18, title: "Fine-Tuned Domain LLM", desc: "Fine-tune an open-source LLM (Llama/Mistral) on domain-specific data using LoRA/QLoRA, with evaluation benchmarks and merge pipeline.", tags: ["genai"], difficulty: 4 },
  { id: 19, title: "AI Code Review Bot", desc: "Create a GitHub-integrated bot that reviews PRs, suggests improvements, detects bugs, and explains reasoning — powered by LLM + AST analysis.", tags: ["genai", "mlops"], difficulty: 4 },
  { id: 20, title: "Multi-Agent Orchestration Framework", desc: "Design a multi-agent system where specialized agents collaborate on tasks with tool use, memory, planning, and self-correction loops.", tags: ["genai"], difficulty: 5 },
  { id: 21, title: "Image Generation Studio", desc: "Build a Stable Diffusion web app with prompt engineering helpers, ControlNet integration, inpainting, and style transfer presets.", tags: ["genai"], difficulty: 4 },
  { id: 22, title: "AI Writing Assistant", desc: "Develop a long-form writing tool with outline generation, tone adjustment, fact-checking, and iterative revision powered by LLMs.", tags: ["genai"], difficulty: 3 },
  { id: 23, title: "Voice Cloning & TTS Pipeline", desc: "Create a text-to-speech system with voice cloning from 30-second samples, emotion control, and real-time streaming synthesis.", tags: ["genai"], difficulty: 5 },
  { id: 24, title: "Text-to-SQL Natural Language Query Engine", desc: "Build a system that translates natural language questions into SQL, executes against a database, and explains results with visualizations.", tags: ["genai", "data"], difficulty: 3 },
  { id: 25, title: "AI-Powered Data Labeling Tool", desc: "Create an active learning labeling platform where LLMs pre-annotate data, humans correct, and the model improves iteratively.", tags: ["genai", "data"], difficulty: 4 },

  // ── MLOps ────────────────────────────────────────
  { id: 26, title: "ML Experiment Tracker", desc: "Build a lightweight experiment tracking system (like MLflow mini) that logs parameters, metrics, artifacts, and compares runs visually.", tags: ["mlops"], difficulty: 3 },
  { id: 27, title: "Model Serving Infrastructure", desc: "Set up production model serving with Triton Inference Server, A/B testing, canary deployments, and autoscaling on Kubernetes.", tags: ["mlops", "infra"], difficulty: 5 },
  { id: 28, title: "Data Drift Monitor", desc: "Implement a monitoring system that detects feature/concept drift using statistical tests, alerts on degradation, and triggers retraining.", tags: ["mlops", "data"], difficulty: 4 },
  { id: 29, title: "CI/CD Pipeline for ML", desc: "Create an end-to-end ML CI/CD pipeline with data validation, model training, evaluation gates, registry push, and automated deployment.", tags: ["mlops", "infra"], difficulty: 4 },
  { id: 30, title: "Feature Store Platform", desc: "Build an online/offline feature store with point-in-time correctness, feature versioning, backfill support, and low-latency serving API.", tags: ["mlops", "data"], difficulty: 5 },
  { id: 31, title: "Model Compression Toolkit", desc: "Implement quantization (INT8/INT4), pruning, and knowledge distillation pipelines with accuracy/performance benchmarking dashboards.", tags: ["mlops"], difficulty: 4 },
  { id: 32, title: "ML Cost Optimizer", desc: "Build a system that profiles training/inference costs across GPU types, suggests right-sizing, spot instance usage, and batch optimization.", tags: ["mlops", "infra"], difficulty: 3 },
  { id: 33, title: "Automated Model Documentation Generator", desc: "Create a tool that auto-generates model cards, data sheets, and fairness reports from training metadata and evaluation results.", tags: ["mlops"], difficulty: 2 },

  // ── Data Engineering ──────────────────────────────
  { id: 34, title: "ETL Pipeline with Great Expectations", desc: "Build a robust ETL pipeline with data validation, schema evolution handling, incremental processing, and failure recovery.", tags: ["data"], difficulty: 3 },
  { id: 35, title: "Streaming Data Processor", desc: "Implement a real-time event processing pipeline (Kafka/Flink) with windowed aggregations, exactly-once semantics, and backpressure handling.", tags: ["data", "infra"], difficulty: 5 },
  { id: 36, title: "Data Quality Dashboard", desc: "Create an interactive dashboard tracking completeness, freshness, uniqueness, and consistency metrics across all data sources.", tags: ["data"], difficulty: 3 },
  { id: 37, title: "Synthetic Data Generator", desc: "Build a tool that generates privacy-safe synthetic datasets preserving statistical properties, correlations, and edge cases using CTGAN/SDV.", tags: ["data", "genai"], difficulty: 4 },
  { id: 38, title: "Vector Database Benchmark Suite", desc: "Benchmark Pinecone, Weaviate, Qdrant, and pgvector on recall, latency, throughput, and cost across different scale points and query types.", tags: ["data", "infra"], difficulty: 4 },

  // ── Infrastructure & Tooling ──────────────────────
  { id: 39, title: "LLM Gateway & Load Balancer", desc: "Build an API gateway that routes requests across LLM providers (OpenAI, Anthropic, local) with fallback, rate limiting, and cost tracking.", tags: ["infra"], difficulty: 4 },
  { id: 40, title: "GPU Cluster Orchestrator", desc: "Create a system that manages GPU allocation across a cluster, with job queuing, priority scheduling, and utilization dashboards.", tags: ["infra"], difficulty: 5 },
  { id: 41, title: "ML Model Registry & Versioning System", desc: "Build a model registry with semantic versioning, lineage tracking, approval workflows, and rollback capabilities.", tags: ["infra", "mlops"], difficulty: 4 },
  { id: 42, title: "Prompt Registry & A/B Testing Platform", desc: "Create a system to version prompts, A/B test variants, track performance metrics, and auto-promote winning versions.", tags: ["infra", "genai"], difficulty: 3 },
  { id: 43, title: "Distributed Training Launcher", desc: "Build a tool that simplifies launching distributed training jobs across multiple GPUs/nodes with automatic checkpointing and recovery.", tags: ["infra"], difficulty: 5 },
  { id: 44, title: "Edge Deployment Toolkit", desc: "Create a toolkit that converts ML models to ONNX/TFLite, optimizes for mobile/edge, and generates deployment packages with benchmarking.", tags: ["infra", "mlops"], difficulty: 4 },

  // ── Capstone / Full-Stack ─────────────────────────
  { id: 45, title: "End-to-End Recommendation Engine", desc: "Build a full recommendation system with data pipelines, candidate generation, ranking, A/B testing, and real-time serving. The whole deal.", tags: ["mlops", "data", "infra"], difficulty: 5 },
  { id: 46, title: "Search Engine with Semantic Ranking", desc: "Create a hybrid search system combining BM25 + dense retrieval, custom reranking, faceted filters, and typo-tolerant query understanding.", tags: ["nlp", "infra"], difficulty: 5 },
  { id: 47, title: "Real-Time Fraud Detection Platform", desc: "Build a streaming fraud detection system with feature stores, ensemble models, explainability, and sub-100ms scoring latency.", tags: ["mlops", "data", "infra"], difficulty: 5 },
  { id: 48, title: "AI-Powered Analytics Dashboard", desc: "Create a dashboard where users ask questions in natural language and get auto-generated charts, insights, and anomaly alerts.", tags: ["genai", "data"], difficulty: 4 },
  { id: 49, title: "Full-Stack AI SaaS Starter Kit", desc: "Build a production-ready SaaS template: auth, billing, usage tracking, rate limiting, RAG pipeline, multi-tenant isolation, and deployment configs.", tags: ["genai", "infra"], difficulty: 5 },
  { id: 50, title: "Open Source AI Contribution Tracker", desc: "Build a portfolio site that automatically aggregates your open-source contributions, papers, projects, and certifications into a polished AI CV.", tags: ["data", "infra"], difficulty: 3 },
];

const STORAGE_KEY = "ai-cv-50apps-progress";

function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch { return {}; }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function toggleApp(id) {
  const progress = loadProgress();
  progress[id] = !progress[id];
  saveProgress(progress);
  render();
  if (progress[id]) {
    spawnConfetti();
  }
}

function updateStats() {
  const progress = loadProgress();
  const completed = Object.values(progress).filter(Boolean).length;
  const remaining = 50 - completed;
  const percent = Math.round((completed / 50) * 100);

  document.getElementById("completedCount").textContent = completed;
  document.getElementById("remainingCount").textContent = remaining;
  document.getElementById("progressPercent").textContent = `${percent}%`;

  const circumference = 2 * Math.PI * 26; // r=26
  const offset = circumference - (percent / 100) * circumference;
  document.getElementById("progressRing").style.strokeDashoffset = offset;

  if (completed === 50) {
    document.getElementById("progressRing").style.stroke = "var(--green)";
    document.getElementById("progressPercent").style.color = "var(--green)";
  } else {
    document.getElementById("progressRing").style.stroke = "var(--accent)";
    document.getElementById("progressPercent").style.color = "var(--accent)";
  }
}

function render(filter = "all") {
  const progress = loadProgress();
  const list = document.getElementById("appList");

  const filtered = filter === "all"
    ? apps
    : apps.filter(app => {
        const filterMap = {
          nlp: "nlp", cv: "cv", genai: "genai",
          mlops: "mlops", data: "data", infra: "infra"
        };
        return app.tags.includes(filterMap[filter]);
      });

  list.innerHTML = filtered.map((app, index) => {
    const done = progress[app.id];
    const diffDots = Array.from({length: 5}, (_, i) =>
      `<span class="dot ${i < app.difficulty ? 'filled' : ''}"></span>`
    ).join("");

    const tags = app.tags.map(t => {
      const labels = { nlp: "NLP", cv: "CV", genai: "Gen AI", mlops: "MLOps", data: "Data", infra: "Infra" };
      return `<span class="tag tag-${t}">${labels[t]}</span>`;
    }).join("");

    const diffLabels = ["", "Beginner", "Easy", "Intermediate", "Advanced", "Expert"];
    const diffLabel = diffLabels[app.difficulty] || "";

    return `
      <div class="app-card ${done ? 'completed' : ''}" data-id="${app.id}" style="animation-delay: ${index * 0.03}s" role="button" tabindex="0">
        <div class="checkbox-wrapper">
          <div class="checkbox-visual">
            <svg viewBox="0 0 16 16"><polyline points="3.5 8 6.5 11 12.5 5"/></svg>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <span class="app-number">#${String(app.id).padStart(2, '0')}</span>
            <span class="app-title">${app.title}</span>
            <div class="difficulty-dots" title="${diffLabel}">${diffDots}</div>
          </div>
          <p class="app-desc">${app.desc}</p>
          <div class="card-tags">
            ${tags}
            <span class="tag tag-difficulty">${diffLabel}</span>
          </div>
        </div>
      </div>`;
  }).join("");

  updateStats();
}

function spawnConfetti() {
  const container = document.createElement("div");
  container.className = "confetti-container";
  document.body.appendChild(container);

  const colors = ["#7c5cfc", "#3dd68c", "#f5a623", "#f25c9b", "#22d3ee", "#5b8def"];
  for (let i = 0; i < 20; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${40 + Math.random() * 20}%`;
    piece.style.top = `${20 + Math.random() * 20}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.3}s`;
    piece.style.animationDuration = `${0.8 + Math.random() * 0.6}s`;
    container.appendChild(piece);
  }
  setTimeout(() => container.remove(), 2000);
}

// Event delegation for clicks
document.getElementById("appList").addEventListener("click", (e) => {
  const card = e.target.closest(".app-card");
  if (card) toggleApp(parseInt(card.dataset.id));
});

// Keyboard accessibility
document.getElementById("appList").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const card = e.target.closest(".app-card");
    if (card) {
      e.preventDefault();
      toggleApp(parseInt(card.dataset.id));
    }
  }
});

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter);
  });
});

// Reset button
document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("Reset all progress? This cannot be undone.")) {
    localStorage.removeItem(STORAGE_KEY);
    render();
  }
});

// Initial render
render();