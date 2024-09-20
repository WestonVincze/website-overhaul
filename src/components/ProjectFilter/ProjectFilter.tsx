import styles from "./ProjectFilter.module.css";
import React, { useState, useId } from "react";
import Select, {
  components,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";
import { IconName } from "@assets/Icons";
import { ProjectCategory } from "@data/Projects/types";
import { StickyNote } from "@components/StickyNote";
import { HighlightedHeading } from "@components/HighlightedHeading";

type Option = { value: string; label: string };

const skills = [
  { value: "React", label: "React" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Aseprite", label: "Aseprite" },
  { value: "Blender", label: "Blender" },
  { value: "Csharp", label: "C#" },
  { value: "CSS", label: "CSS" },
  { value: "Figma", label: "Figma" },
  { value: "HTML", label: "HTML" },
  { value: "Jest", label: "Jest" },
  { value: "NextJS", label: "NextJS" },
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
  { value: "", label: "All" },
  { value: "website", label: "Websites" },
  { value: "game", label: "Games" },
  { value: "demo", label: "Demos" },
];

export type FilterCriteria = {
  selectedSkills?: IconName[];
  selectedCategory?: ProjectCategory;
};

const CustomOption = (props: any) => {
  return (
    <components.Option {...props}>
      <div className={styles.optionContainer}>
        <div className={styles.optionIcon}>
          <StickyNote
            variant="sticker"
            icon={props.data.value}
            size="small"
            showText={false}
          />
        </div>
        <>{props.data.label}</>
      </div>
    </components.Option>
  );
};

const filterStyles: StylesConfig<Option, true> = {
  control: (styles) => ({ ...styles }),
  menu: (styles) => ({ ...styles }),
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
    <>
      <HighlightedHeading text="Filter Projects" id={"filter"} />
      <div className={styles.filterContainer}>
        <div className={styles.filterControls}>
          <div className={styles.inputGroup}>
            <label htmlFor={categoriesId}>Type of Project</label>
            <Select
              instanceId={categoriesId}
              className={styles.select}
              placeholder="Any Type"
              onChange={handleCategoryChange}
              options={categories}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor={skillsId}>Skills</label>
            <Select
              instanceId={skillsId}
              className={styles.select}
              placeholder="Any Skill"
              onChange={handleSkillChange}
              isMulti
              options={skills}
              components={{ Option: CustomOption }}
              styles={filterStyles}
            />
          </div>
        </div>
      </div>
    </>
  );
};
