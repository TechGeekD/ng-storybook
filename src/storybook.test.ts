// storybook.spec.ts
import path from 'path';

import initStoryshots from '@storybook/addon-storyshots';
// initStoryshots();
initStoryshots({
    framework: 'angular',
    configPath: path.join(__dirname, '..', '.storybook'),
    integrityOptions: { cwd: path.join(__dirname, 'src', 'stories') },
  });