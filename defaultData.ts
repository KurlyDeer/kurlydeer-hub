import { Project, BlogPost } from "../types";

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "proj_1",
    title: "VectorSearch-Go Engine",
    description: "A high-performance library written in pure Go for high-dimensionality vector indexing and approximate nearest neighbor (ANN) searches, featuring HNSW graph construction with zero external runtime dependencies.",
    category: "Systems & CLI",
    status: "Completed",
    technologies: ["Go", "gRPC", "Docker", "Flatbuffers"],
    githubUrl: "https://github.com/example/vectorsearch-go",
    liveUrl: "https://vector-demo.example.com",
    createdAt: "2026-04-18",
    readme: `# VectorSearch-Go Engine

### Architecture Overview
This project provides high-performance approximate nearest neighbor retrieval directly within Go apps.

\`\`\`
[Vector Query] --> [HNSW Graph Transversal] --> [Priority Queue L1-Cache] --> [Top K Neighbors]
\`\`\`

### High-Performance Characteristics
- **Graph Construction**: Hierarchical Navigable Small World (HNSW) graph networks with heuristic routing.
- **Distance Metrics**: Cosine Similarity, L2 Euclidean Distance, and Dot Product utilizing SIMD assembly instructions where available.
- **Extremely Low Memory Footprint**: Compact contiguous memory representation to prevent excessive garbage collector sweeps in high-throughput workloads.
`
  },
  {
    id: "proj_2",
    title: "Edge-Nexus IoT Gateway",
    description: "An embedded systems laboratory project simulating a low-power telemetry collection hub. Connects multi-channel Modbus and I2C sensors to cloud-hosted telemetry logs using an asynchronous queue pattern.",
    category: "Hardware & IoT",
    status: "In Progress",
    technologies: ["Rust", "ESP32", "MQTT", "WebSockets", "D3.js"],
    createdAt: "2026-05-10",
    readme: `# Edge-Nexus IoT Gateway

### Hardware & Protocol Demonstration
This lab project showcases high-throughput telemetry stream processing on constrained microcontroller setups.

### Technical Achievements
- Custom Ring-buffer pipeline written in ESP-IDF Rust to ensure zero-copy deserialization of binary packets.
- Standard protocol validation for Modbus over RS485 backplanes.
- Live MQTT messaging bridge sending compressed payloads over network sockets.
`
  },
  {
    id: "proj_3",
    title: "Synapse-KV Distributed Storage",
    description: "An educational distributed key-value storage layer featuring a fully functional Raft state-machine implementation for leader election, replication logs, and atomic transactional operations.",
    category: "Full-Stack",
    status: "Research",
    technologies: ["TypeScript", "Node.js", "Vite", "React", "Consensus Protocol"],
    createdAt: "2026-06-01",
    readme: `# Synapse-KV Storage

### Lab Objective
Implementing consensus-driven distributed systems can be challenging. Synapse-KV simplifies visual tracking of Raft state.

### Planned Features
- Visual cluster layout to simulate partition splits and active node drops.
- AppendEntries heartbeats plotted in real-time over responsive UI canvases.
- Strict linearizability check engine to confirm safe transaction writes.
`
  },
  {
    id: "proj_4",
    title: "AeroFlow Fluid Dynamics Canvas",
    description: "An interactive, canvas-based visualization engine of steady-state 2D Navier-Stokes equations utilizing WebGL shader pipelines to chart aerodynamic wind currents dynamically over geometric obstructions.",
    category: "AI & Labs",
    status: "Completed",
    technologies: ["WebGL", "TypeScript", "Vite", "Mathematics"],
    liveUrl: "https://aeroflow.example.com",
    createdAt: "2026-03-24",
    readme: `# AeroFlow Simulator

### Numerical Analysis
This interactive laboratory simulates wind currents in dynamic grids, compiling mathematical partial differential equations into real-time GPU fragment shader kernels.

### Visualization Capabilities
- Streamline particle injection.
- Dynamic obstacle positioning.
- Real-time heatmaps for vorticity, pressure gradients, and velocity magnitudes.
`
  }
];

export const DEFAULT_BLOGS: BlogPost[] = [
  {
    id: "blog_1",
    title: "Deploying Distributed Key-Value Store with Raft Consensus in Go & WebAssembly",
    summary: "A technical walkthrough of compiling a multi-node Raft state machine to WebAssembly, running simulated regional consensus clusters fully client-side on the portfolio preview frame.",
    category: "Distributed Systems",
    tags: ["Go", "Raft", "WebAssembly", "Consensus", "Systems Engineering"],
    publishedAt: "2026-05-22",
    readTime: "9 min read",
    difficulty: "Advanced",
    author: "Portfolio Controller",
    content: `# Deploying Distributed Key-Value Store with Raft Consensus in Go & WebAssembly

A highly resilient distributed store depends on deterministic state machine replication. In the real world, testing network split partitions and server health drops requires complex orchestration nodes. This report illustrates compiling a production-ready Raft library into WebAssembly to execute in-browser cluster simulations.

## 1. Raft Engine State Flow
Our model operates along three core roles: **Leader**, **Candidate**, and **Follower**.

\`\`\`
       [Startup]
           |
           v
     +------------+      Election Timeout      +-------------+
     |  Follower  | -------------------------> |  Candidate  |
     +------------+                            +-------------+
       ^        ^                                     |
       |        |        Receives Leader Heartbeat    | Votes Majoric
       |        +-------------------------------------+
       |                                              v
       |             Step Down                 +-------------+
       +-------------------------------------- |   Leader    |
                                               +-------------+
\`\`\`

## 2. Implementing the State Machine in Go
The core Go state structure expects safe channel synchronization to process state changes without race conditions:

\`\`\`go
type Node struct {
    mu        sync.Mutex
    id        string
    peers     []string
    state     NodeState
    commitIdx int
    log       []LogEntry
}
\`\`\`

When executing in the browser using WebAssembly (\`syscall/js\`), we bind standard trigger points to the DOM. This allows triggering network partitions directly from our visual control panel.

## 3. High-Density Quantization of Latency Under Simulated Partitions
Below are measured durations for a 3-node cluster to re-elect a new coordinator node after dropping the primary leader node:

| Partition Offset | Node Count | Election Target Limit | Actual Convergence Time | Status |
|---|---|---|---|---|
| No Drop (Healthy) | 5 nodes | <50ms | 4.2ms | ONLINE |
| Primary Isolated | 3 nodes | <350ms | 184.1ms | RECOVERED |
| Major Core Isolated | 5 nodes | <500ms | 412.5ms | PARTIALLY_OFFLINE |

By running network consensus states within browser threads, developers can analyze log replication safety policies on local clients with zero hosting cost.
`
  },
  {
    id: "blog_2",
    title: "Quantizing Large Language Models for Edge Microcontrollers: A Deep Dive into 4-bit Integer Representation",
    summary: "Exploring weight compression algorithms (such as AWQ and GPTQ) down to low-precision formats. Includes an analysis of memory savings and accuracy regressions on ESP32 development hardware.",
    category: "AI & Embedded",
    tags: ["Machine Learning", "Edge Devices", "Quantization", "C++", "Optimizations"],
    publishedAt: "2026-06-08",
    readTime: "12 min read",
    difficulty: "Expert",
    author: "Portfolio Controller",
    content: `# Quantizing Large Language Models for Edge Microcontrollers: A Deep Dive into 4-bit Integer Representation

Running artificial neural networks in memory-constrained environments (such as ESP-S3 chips with 8MB cellular SRAM) presents serious data storage challenges. Standard FP16 weights require gigabytes of capacity. This guide provides theoretical and implementation models for 4-bit weight integer quantization.

## 1. Theoretical Quantization Formula
Uniform asymmetric quantization maps floating-point ranges directly to smaller integer ranges:

$$\\text{quantize}(x) = \\text{clamp}\\left(\\text{round}\\left(\\frac{x}{S}\\right) + Z, 0, 2^b - 1\\right)$$

Where:
- $S$ is the Scale factor (floating point).
- $Z$ is the Zero-point offset (integer).
- $b$ is the target bit precision (e.g., $b = 4$ for 16 distinct values).

## 2. Memory Analysis Card
By converting conventional tensors to quantized representation, the system registers massive improvements in memory footprint:

| Original DataType | Compressed Format | Model Size (8B Params) | Edge Compatibility |
|---|---|---|---|
| FP32 (Single Precision) | 32-bit float | 32 GB | High-Performance Server Only |
| FP16 (Half Precision) | 16-bit half | 16 GB | High-End Mobile Node |
| INT8 (Asymmetric) | 8-bit integer | 8 GB | Gateway Controller |
| INT4 (Quantized Block) | 4-bit integer | 4 GB | Embedded Hardware (8MB SRAM limit) |

## 3. Practical Core C Snippet for Quantized De-quantization
To perform speedy matrices multiplication during active forward-passes, we de-quantize weights dynamically back to floating states:

\`\`\`cpp
inline float dequantize(uint8_t q_val, float scale, uint8_t zero_point) {
    return scale * (static_cast<float>(q_val) - static_cast<float>(zero_point));
}
\`\`\`

## 4. Key Limitations and regressive error rates
While 4-bit weight models fit perfectly on cellular microchips, the loss of granularity decreases model accuracy in complex logical tasks. Using **Activation-aware Weight Quantization (AWQ)** mitigates this issue by protecting critical structural pathways.
`
  },
  {
    id: "blog_3",
    title: "Optimizing Reactive Frontend Virtual Dom Reconciliation with Key Memoization Techniques",
    summary: "A crisp look into the underlying algorithms of modern reactive rendering pipelines, explaining key mapping indices and preventing common double-renders.",
    category: "Web Engineering",
    tags: ["React", "TypeScript", "Performance", "Software Engineering"],
    publishedAt: "2026-06-11",
    readTime: "6 min read",
    difficulty: "Intermediate",
    author: "Portfolio Controller",
    content: `# Optimizing Reactive Frontend Virtual Dom Reconciliation with Key Memoization Techniques

Modern frameworks allow quick, declarative UI development. However, neglecting key lifecycle principles easily incurs re-render cascades, turning active client views sluggish. This guide highlights the core reconciliation principles of modern browser engines.

## 1. The Cost of Dynamic Lists
When rendering grids of items (such as project portfolios or real-time message boards), using array index coordinates as \`key\` identifiers causes significant issues if the array is re-sorted, filtered, or sliced.

### What happens when you do this?
When standard index keys are used, a slice operation forces the renderer to rebuild and re-initialize every single row element below the inserted node point, losing focal states, scroll layouts, and active inputs:

\`\`\`
Dynamic List Model:
Index-based: [Key:0 - NodeA] --> [Key:1 - NodeB (Replaced)] --> [Key:2 - NodeC (Replaced)]
Unique UUIDs: [Id:proj1 - NodeA] --> [Id:proj2 - NodeB] --> [Id:proj3 - NodeC]
\`\`\`

## 2. Dynamic Performance Metrics Comparison
Below are metrics indicating DOM rendering latencies comparing standard dynamic indexes with stabilized primary IDs over complex dataset updates:

- **100 Dynamic Nodes (Index-keyed)**: ~14.2ms to process frame updates.
- **100 Dynamic Nodes (Unique ID-keyed)**: ~1.8ms to process frame updates.
- **1000 Dynamic Nodes (Index-keyed)**: ~118.5ms (noticeable visual lag).
- **1000 Dynamic Nodes (Unique ID-keyed)**: ~8.4ms (smooth, fluid experience).

Using stable keys combined with targeted \`React.memo\` guarantees that only modified items update, ensuring high-density dashboards run at 60 FPS under heavy data streams.
`
  }
];
