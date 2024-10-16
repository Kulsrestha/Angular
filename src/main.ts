import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  // Import this
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: ReactiveFormsModule }  // Ensure ReactiveFormsModule is provided
  ]
});

