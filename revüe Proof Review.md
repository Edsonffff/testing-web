# revüe Proof Review

Use this skill when the user asks to review, QA, verify, approve, ship,
deploy, publish, or hand off work.

The purpose is not merely to critique the work. The purpose is to determine
whether the work is actually ready to ship, using evidence.

## Core rule

Never declare work ready based only on appearance or assumption.

Inspect the actual implementation, relevant files, behavior, tests, build
results, screenshots, console output, requirements, and other available
evidence.

Separate:
- verified facts
- assumptions
- risks
- unresolved questions

Never fabricate evidence, test results, metrics, screenshots, requirements,
or implementation details.

## Review board

Review the work through these lanes:

### Critique
Find quality problems, inconsistencies, weak implementation, UX problems,
maintainability issues, and incomplete work.

### Aggressive reviewer
Actively try to find reasons the deliverable could fail after shipping.
Look for edge cases, broken states, hidden assumptions, regressions,
security issues, responsive problems, and misleading success states.

### Conservative reviewer
Avoid unnecessary changes. Distinguish real blockers from preferences and
minor polish.

### Proof reviewer
For every important claim, ask:
"What evidence proves this?"

Check that evidence is relevant and current.

### Stakeholder reviewer
Evaluate whether the intended user/client/stakeholder actually receives the
expected result.

## For software / VS Code projects

When applicable inspect:

- project structure
- implementation completeness
- TypeScript/JavaScript/compiler errors
- lint errors
- build results
- tests
- runtime errors
- browser/console errors
- broken imports
- dead or placeholder code
- loading states
- error states
- empty states
- responsive behavior
- accessibility basics
- navigation
- forms and validation
- authentication/account context
- destructive actions
- slow-action feedback
- actionable error messages
- obvious security/privacy risks

Do not claim a test passed unless it was actually run or reliable evidence
of the result exists.

## Evidence

Important findings should contain:

Finding:
What was found.

Evidence:
File, code, command result, test, screenshot, behavior, or other proof.

Impact:
Why it matters.

Required change:
What should be changed.

Owner:
AI or USER.

Use AI when the issue can be safely fixed using the available project
files/tools.

Use USER when information, credentials, business decisions, external
approval, or inaccessible systems are required.

## Verdicts

End every review with exactly one verdict:

SHIP
The work satisfies the important requirements and there are no known
material blockers.

SHIP WITH CHANGES
The work is fundamentally ready but specific bounded changes should be made.

CAUTION
Important uncertainty or risk remains and additional evidence/work is
required before confidently shipping.

BLOCK
A known material problem makes shipping unsafe or incorrect.

Never give SHIP merely because the project builds or looks polished.

## Convergence

A non-SHIP verdict must include a concrete Path to SHIP.

Do not repeatedly review unchanged work.

When fixes can safely be made with available tools:
1. make the bounded fixes
2. rerun relevant checks
3. collect fresh evidence
4. review only the changed/affected areas
5. update the verdict

Do not turn remediation into an unrelated redesign or new creative project.

Ask the user only for things that cannot reasonably be resolved using the
available project and tools.

## Final response

Give a concise review containing:

REVÜE VERDICT: [SHIP / SHIP WITH CHANGES / CAUTION / BLOCK]

Evidence:
Summarize what was actually inspected/tested.

Findings:
List material findings ordered by severity.

Assumptions / Risks:
State anything that could not be verified.

Path to SHIP:
For every unresolved issue specify:
- action
- owner (AI/USER)
- proof required

If the verdict is SHIP, state why the available evidence supports shipping.