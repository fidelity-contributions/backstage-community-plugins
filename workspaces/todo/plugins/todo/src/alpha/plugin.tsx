/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  ApiBlueprint,
  createApiFactory,
  createFrontendPlugin,
  identityApiRef,
  discoveryApiRef,
} from '@backstage/frontend-plugin-api';
import {
  compatWrapper,
  convertLegacyRouteRef,
  convertLegacyRouteRefs,
} from '@backstage/core-compat-api';
import { EntityContentBlueprint } from '@backstage/plugin-catalog-react/alpha';
import { todoApiRef, TodoClient } from '../api';
import { rootRouteRef } from '../routes';

/** @alpha */
export const todoApi = ApiBlueprint.make({
  params: {
    factory: createApiFactory({
      api: todoApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        identityApi: identityApiRef,
      },
      factory: ({ discoveryApi, identityApi }) =>
        new TodoClient({ discoveryApi, identityApi }),
    }),
  },
});

/** @alpha */
export const todoEntityContent = EntityContentBlueprint.make({
  name: 'todoEntityContent',
  params: {
    defaultPath: '/todo',
    defaultTitle: 'Todo',
    routeRef: convertLegacyRouteRef(rootRouteRef),
    loader: () =>
      import('../components/TodoList').then(m => compatWrapper(<m.TodoList />)),
  },
});

/** @alpha */
export default createFrontendPlugin({
  pluginId: 'todo',
  extensions: [todoApi, todoEntityContent],
  routes: convertLegacyRouteRefs({
    root: rootRouteRef,
  }),
});
