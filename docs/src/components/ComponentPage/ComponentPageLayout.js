import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComponentHeader from './ComponentHeader';
import LiveEdit from '../LiveEdit/LiveEdit';
import CodeBlock from '../CodeBlock';
import PropsTable from '../PropsTable';
import Section from '../Section';
import SideScrollMenu from '../SideScrollMenu';
import ComponentDescription from './ComponentDescription';

class ComponentPageLayout extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    description: PropTypes.string,
    docsLink: PropTypes.string,
    title: PropTypes.string,
    componentName: PropTypes.string,
    importCode: PropTypes.string,
    sideScrollMenuItems: PropTypes.array,
    propData: PropTypes.array,
    children: PropTypes.node,
    liveEditScope: PropTypes.object,
    liveEditCode: PropTypes.string,
    usageCode: PropTypes.string,
    componentDescription: PropTypes.string,
  };

  render() {
    const {
      title,
      componentName,
      description,
      docsLink,
      importCode,
      children,
      propData,
      sideScrollMenuItems,
      liveEditScope,
      liveEditCode,
      usageCode,
      componentDescription,
    } = this.props;

    const scrollItems = [
      { name: 'Component' },
      { name: 'Usage' },
      { name: 'Props' },
      ...sideScrollMenuItems,
    ];
    return (
      <div style={{ marginBottom: 24 }}>
        <SideScrollMenu items={scrollItems} />
        <ComponentHeader
          title={title}
          description={description}
          docsLink={docsLink}
          code={importCode}
        />
        <Section
          name="Component"
          href={`/components/${componentName}#component`}
          id="component">
          <ComponentDescription text={componentDescription} />
          <LiveEdit code={liveEditCode} scope={liveEditScope} />
        </Section>

        <Section
          name="Usage"
          href={`/components/${componentName}#usage`}
          id="usage">
          <CodeBlock code={usageCode} canCopy />
        </Section>
        <Section
          name="Props"
          href={`/components/${componentName}#props`}
          id="props">
          <PropsTable data={propData} />
        </Section>
        {children}
      </div>
    );
  }
}

export default ComponentPageLayout;
