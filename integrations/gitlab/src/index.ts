import { Router } from 'itty-router';

import { listGitLabProjectBranches, listGitLabProjects } from './routes';

const router = Router({
    base: new URL(
        environment.spaceInstallation?.urls.publicEndpoint ||
            environment.installation?.urls.publicEndpoint ||
            environment.integration.urls.publicEndpoint
    ).pathname,
});

/**
 * Bind the integration's routes.
 */
router.get('/projects', listGitLabProjects);
router.get('/branches', listGitLabProjectBranches);

addEventListener('fetch', (event, eventContext) => {
    event.respondWith(router.handle(event.request, eventContext));
});
