-- Example from getting-started-with-lean.tex. Check with: lean GettingStartedExample.lean (Lean 4 core, no Mathlib).
theorem my_zero_add (n : Nat) : 0 + n = n := by
  induction n with
  | zero => rfl
  | succ k ih => rw [Nat.add_succ, ih]

example (a b : Nat) : a + b = b + a := by
  exact Nat.add_comm a b

#check my_zero_add
