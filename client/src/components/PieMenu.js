import React from 'react';
import PieMenu, { Slice } from 'react-pie-menu';



export default ({ x, y }) => (
    <PieMenu
        radius='125px'
        centerRadius='35px'
        centerX={x}
        centerY={y}
    >
    
        {/* Contents */}
        <Slice onSelect={() => window.open('https://www.facebook.com', '_blank')}>
        Upper
        </Slice>
        <Slice onSelect={() => window.open('https://www.twitter.com', '_blank')}>
        Lower
        </Slice>
        <Slice onSelect={() => window.open('https://www.linkedin.com', '_blank')}>
        Cardio
        </Slice>
        <Slice onSelect={() => window.open('https://github.com/psychobolt/react-pie-menu', '_blank')}>
        Core
        </Slice>
        <Slice onSelect={() => window.open('https://en.wikipedia.org/wiki/RSS', '_blank')}>
        Back
        </Slice>

    </PieMenu>
);