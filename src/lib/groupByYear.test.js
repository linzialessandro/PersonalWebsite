import { describe, expect, it } from "vitest";
import { publications } from "../data/publications";
import { groupByYear } from "./groupByYear";

describe("groupByYear", () => {
  it("sorts years newest first and keeps prefaces after other work", () => {
    const items = [
      { title: "Article", year: 2024 },
      { title: "Preface", year: 2024, kind: "preface" },
      { title: "Later", year: 2025 },
      { title: "Earlier preface", year: 2024, kind: "preface" },
    ];

    expect(groupByYear(items)).toEqual([
      [2025, [{ title: "Later", year: 2025 }]],
      [
        2024,
        [
          { title: "Article", year: 2024 },
          { title: "Preface", year: 2024, kind: "preface" },
          { title: "Earlier preface", year: 2024, kind: "preface" },
        ],
      ],
    ]);
  });

  it("groups a missing year as Other without reordering the input", () => {
    const items = [{ title: "Note" }, { title: "Dated", year: 2020 }];
    const titles = items.map((item) => item.title);

    expect(groupByYear(items)).toEqual([
      ["Other", [{ title: "Note" }]],
      [2020, [{ title: "Dated", year: 2020 }]],
    ]);
    expect(items.map((item) => item.title)).toEqual(titles);
  });

  it("keeps every catalogued article, with prefaces last in their year", () => {
    const grouped = groupByYear(publications);
    const flat = grouped.flatMap(([, group]) => group);

    expect(flat.map((item) => item.title).sort()).toEqual(
      publications.map((item) => item.title).sort()
    );

    for (const [, group] of grouped) {
      const preface = group.map((item) => item.kind === "preface");
      const first = preface.indexOf(true);
      if (first === -1) continue;
      expect(preface.slice(first).every(Boolean)).toBe(true);
    }
  });
});
