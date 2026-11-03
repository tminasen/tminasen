import { Component } from '@angular/core';
import { SkillListItem } from '../../../../common/model/ListItem';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  public frontendSkillList: SkillListItem[] = [
    {
      skill: 'JavaScript',
      experience: 5,
      icon: 'assets/skill-icon/javascript.svg'
    },
    {
      skill: 'TypeScript',
      experience: 5,
      icon: 'assets/skill-icon/typescript.svg'
    },
    {
      skill: 'Angular',
      experience: 4,
      icon: 'assets/skill-icon/angular.svg'
    },
    {
      skill: 'React',
      experience: 3,
      icon: 'assets/skill-icon/react.svg'
    },
    {
      skill: 'Next.js',
      experience: 1,
      icon: 'assets/skill-icon/nextjs-logo.svg'
    },
    {
      skill: 'Sass',
      experience: 4,
      icon: 'assets/skill-icon/sass-logo.svg'
    },
    {
      skill: 'styled-components',
      experience: 3,
      icon: 'assets/skill-icon/styled-components.svg'
    },
    {
      skill: 'tailwindcss',
      experience: 3,
      icon: 'assets/skill-icon/tailwindcss-mark.svg'
    }
  ];

  public backendSkillList: SkillListItem[] = [
    {
      skill: 'express',
      experience: 5,
      icon: 'assets/skill-icon/express.svg'
    },
    {
      skill: 'node.js',
      experience: 5,
      icon: 'assets/skill-icon/nodejs.svg'
    },
    {
      skill: 'SpringBoot',
      experience: 3,
      icon: 'assets/skill-icon/spring-boot.svg'
    },
    {
      skill: 'Rust',
      experience: 1,
      icon: 'assets/skill-icon/rust-logo.svg'
    },
    {
      skill: 'Java',
      experience: 3,
      icon: 'assets/skill-icon/java.svg'
    }
  ];

  constructor() {
  }

}
