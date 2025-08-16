# Angular Signals & Inputs Playground

This project explores **Angular’s Signals APIs, signal-based inputs/outputs, and router-driven input binding**.  
Each concept lives on its own dedicated page with clear, minimal examples for quick learning.

## 📚 Topics Covered

1. **Signals Fundamentals**
   - `writeable-signal` – Create and mutate a basic `signal()` (a.k.a. WritableSignal) and react in the template.
   - `computed-signal` – Derive state from other signals with `computed()`.
   - `effect` – Side effects that automatically track the signals they read.
   - `linkedSignal` – Keep a selection/value in sync with a source signal, preserving validity across updates.

2. **Signal-Based Component APIs**
   - `input` *(not @Input)* – Use `input()` for signal inputs (optionally `required`, with transforms).
   - `output` *(not @Output)* – Use `output()` for signal outputs that emit values without `EventEmitter`.
   - `model-input` – Two-way bound signal inputs via `model()` and `[(model)]` syntax.

3. **Signals ↔︎ RxJS Interop**
   - `toObservable` – Bridge a signal to an RxJS `Observable` for operator pipelines or external APIs.
   - `toSignal` – Convert an `Observable` into a `signal()` with initial value and cleanup.

4. **Router Input Binding**
   - `routing params capture with input` – Bind route params/query params directly to component `input()`s via Router component input binding.

---

## 📂 Project Structure

Each topic has its **own route/page** with:
- A concise explanation of what it does.
- A minimal, focused code example.
- A live demonstration in the browser.
