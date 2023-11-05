import styles from "./PortfolioItem.module.css";
import { LinedPaper } from "../LinedPaper";
import { StickyNote } from "../StickyNote";
import { IconName } from "../Icons";

type SocialLink = {
  icon: IconName;
  text: string;
  url: string;
};

// instead of explicitly named link variables, let's pass an array of socialLinks
interface PortfolioItemProps {
  title: string;
  description: string;
  links?: SocialLink[];
}

export const PortfolioItem = ({
  title,
  description,
  links,
}: PortfolioItemProps) => {
  /**
   * lined paper container
   * h1
   * stickers
   * content
   * StickyNote links
   */
  return (
    <LinedPaper title={title}>
      <section className={styles.body}>
        <p>{description}</p>
      </section>
      <section className={styles.footer}>
        {links?.map((link) => (
          <a href={link.url} target="_blank" rel="noreferrer" key={link.text}>
            <StickyNote text={link.text} icon={link.icon} />
          </a>
        ))}
      </section>
    </LinedPaper>
  );
};
