import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  special: any[] = [
    {
      picture: 'gem.png',
      title: 'Industry experts',
      description: 'Our team conists of industry experts with years of experience in the offensive security field who always produce exceptional results.'
    },
    {
      picture: 'brain.png',
      title: 'Built on Security Intelligence',
      description: 'Our assessments are built on top of unique in-house methdologies that are intelligently gathered from dozens of security assessments.'
    },
    {
      picture: 'plan.png',
      title: 'Best Practices',
      description: 'We follow the best practices by leveraging independent research and analysis of current events.'
    },
    {
      picture: 'compliance.png',
      title: 'Industry Standards',
      description: 'Our work is based on the industry standards of NIST, ISO 27001, ITL, HIPAA, PCI-DSS, NERC, GLBA/FFIEC, OWASP.'
    },
    {
      picture: 'hunted_skull.png',
      title: 'Bleeding-edge Exploits',
      description: 'Working to make sure no new vulnerabilities slip through the cracks or escape advanced analysis.'
    },
  ];

  services: any[] = [
    {
      title: 'Unmatched Experience',
      description: 'Our team of experts have decades of practical offensive security experience and have performed dozens of assessments for governmental agencies and leading corporations in financial, healthcare and communication industries.'
    },
    {
      title: 'Sharp Percision',
      description: 'While no one can promise to find 100% of vulnerabilities within your systems, you can rest assured that we do our best not to let anything slip away by performing both manual and automated vetting of your system to secure it in every possible way with zero false positive issues (100% accuracy).'
    },
    {
      title: 'risk free',
      description: 'No matter whether we are testing a staging or a production system, our team of experts will always be aware of the context of assessment to ensure your service never gets interrupted even while we are keeping threat actors away.'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
