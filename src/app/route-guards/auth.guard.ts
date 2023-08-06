import { inject } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { ActivatedRoute, Router } from "@angular/router";

export const authGuard = () => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);

    if (authService.isLoggedIn) {
        return true;
    }

    // Redirect to the login page
    return router.parseUrl('/login');
};

export const loginGuard = () => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);

    if (!authService.isLoggedIn) {
        return true;
    }

    // Redirect to the login page
    return router.parseUrl('/');
};