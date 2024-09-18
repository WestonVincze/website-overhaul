import styles from "./ProjectFilter.module.css";
import React, { useState, useId } from "react";
import Select, { components, MultiValue, SingleValue } from "react-select";
import { IconName } from "@assets/Icons";
import { ProjectCategory } from "@data/Projects/types";
import { LinedPaper } from "@components/LinedPaper";
import { SkillStickers } from "@components/SkillStickers";
import { StickyNote } from "@components/StickyNote";

type Option = { value: string; label: string };

const skills = [
  { value: "React", label: "React" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "GitHub", label: "GitHub" },
  { value: "Aseprite", label: "JavaScript" },
  { value: "Blender", label: "Blender" },
  { value: "Bootstrap", label: "Bootstrap" },
  { value: "Csharp", label: "C#" },
  { value: "CSS", label: "CSS" },
  { value: "Figma", label: "Figma" },
  { value: "HTML", label: "HTML" },
  { value: "Jest", label: "Jest" },
  { value: "NextJS", label: "NextJS" },
  { value: "NodeJS", label: "NodeJS" },
  { value: "Unity", label: "Unity" },
  { value: "VueJS", label: "VueJS" },
  { value: "Vercel", label: "Vercel" },
  { value: "ReactSpring", label: "React Spring" },
  { value: "XState", label: "XState" },
  { value: "CodeSandbox", label: "CodeSandbox" },
  { value: "AJAX", label: "AJAX" },
  { value: "Vitest", label: "Vitest" },
  { value: "Colyseus", label: "Colyseus" },
  { value: "Phaser", label: "Phaser" },
  { value: "PixiJS", label: "PixiJS" },
  { value: "Svelte", label: "Svelte" },
  { value: "BitECS", label: "BitECS" },
  { value: "RxJS", label: "RxJS" },
];

const categories = [
  { value: "demo", label: "Demo" },
  { value: "game", label: "Game" },
  { value: "website", label: "Website" },
];

export type FilterCriteria = {
  selectedSkills?: IconName[];
  selectedCategory?: ProjectCategory;
};

const CustomOption = (props: any) => {
  return (
    <components.Option className={styles.option} {...props}>
      <StickyNote variant="sticker" icon={props.data.value} size="small" />
      {props.data.label}
    </components.Option>
  );
};

export const ProjectFilter: React.FC<{
  onFilterChange: (criteria: FilterCriteria) => void;
}> = ({ onFilterChange }) => {
  const skillsId = useId();
  const categoriesId = useId();

  const [selectedSkills, setSelectedSkills] = useState<IconName[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | undefined
  >(undefined);

  const handleSkillChange = (options: MultiValue<Option>) => {
    const skills = [...options.map((option) => option.value)];
    setSelectedSkills(skills);
    onFilterChange({
      selectedSkills: skills,
      selectedCategory,
    });
  };

  const handleCategoryChange = (option: SingleValue<Option>) => {
    const category = option?.value as ProjectCategory;
    setSelectedCategory(category);
    onFilterChange({ selectedSkills, selectedCategory: category });
  };

  return (
    <div>
      <LinedPaper title="Filter Projects">
        <div className={styles.filterContainer}>
          <div>
            <label htmlFor={skillsId}>Skills</label>
            <Select
              instanceId={skillsId}
              className={styles.select}
              placeholder="All"
              onChange={handleSkillChange}
              isMulti
              options={skills}
              components={{ Option: CustomOption }}
            />
          </div>
          <div>
            <label htmlFor={skillsId}>Category</label>
            <Select
              instanceId={categoriesId}
              className={styles.select}
              placeholder="All"
              onChange={handleCategoryChange}
              options={categories}
            />
          </div>
        </div>
      </LinedPaper>
    </div>
  );
};
