// Mimics a signal, but does not mimic it's change detection behavior.
// This is a simple function that returns a value, without any reactivity.
export function customSignal<T>(value: T) {
    return () => value;
}