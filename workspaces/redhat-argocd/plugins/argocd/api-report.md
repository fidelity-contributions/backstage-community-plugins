## API Report File for "@backstage-community/plugin-redhat-argocd"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { BackstagePlugin } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { JSX as JSX_2 } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';

// Warning: (ae-missing-release-tag) "ArgocdDeploymentLifecycle" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const ArgocdDeploymentLifecycle: () => JSX_2.Element | null;

// Warning: (ae-missing-release-tag) "ArgocdDeploymentSummary" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const ArgocdDeploymentSummary: () => JSX_2.Element | null;

// Warning: (ae-missing-release-tag) "argocdPlugin" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const argocdPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {},
  {}
>;

// Warning: (ae-missing-release-tag) "isArgocdConfigured" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const isArgocdConfigured: (entity: Entity) => boolean;

// (No @packageDocumentation comment for this package)
```