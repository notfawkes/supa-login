# Supa Login

A good-looking, reusable React component for Supabase authentication.

## Preview

![Supa Login Demo](https://raw.githubusercontent.com/notfawkes/supa-login/095366d9656ac1372a02bbac7bbc7e405e3265bd/assets/supa-login-demo.gif)

## Installation

```bash
npm install supa-login
```

## Usage

```tsx
import AuthUI from 'supa-login';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

function App() {
  return (
    <AuthUI supabaseClient={supabase} />
  );
}
```

## Features

- Login and Signup forms
- Social login with Google
- Easy to integrate
- Customizable (soon!)

## Configuration

Before you can use `supa-login`, you need to configure your Supabase project to enable Google authentication.

### 1. Getting Your Supabase Credentials

Every Supabase project has a unique URL and a set of API keys.

1.  Go to your Supabase project dashboard.
2.  In the left sidebar, navigate to **Settings**.
3.  Click on **API**.
4.  Here you will find your **Project URL** and your **Project API Keys**. You'll need the `anon` `public` key.
5.  Copy these values into your `.env` file:

    ```env
    VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
    VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
    ```
Or else

Just click on the **Connect** button which is in top and navigate to **App Frameworks** tab

### 2. Setting Up Google Authentication

1.  **Enable the Google Provider in Supabase:**
    *   In your Supabase project dashboard, go to **Authentication** (the user icon).
    *   Click on **Providers** in the sidebar.
    *   Find **Google** in the list and enable it.

2.  **Get Your Google Client ID and Secret:**
    *   Go to the [Google Cloud Console](https://console.cloud.google.com/).
    *   Create a new project or select an existing one.
    *   Navigate to **APIs & Services** > **Credentials**.
    *   Click **Create Credentials** and select **OAuth client ID**.
    *   Choose **Web application** as the application type.
    *   Under **Authorized redirect URIs**, you must add the callback URL from your Supabase Google provider settings. It will look like this: `https://<YOUR_PROJECT_REFERENCE_ID>.supabase.co/auth/v1/callback`
    Note: You will get this callback URL under **Authentication > SignIn/Providers > Google**
    *   Click **Create**. You will now see your **Client ID** and **Client Secret**.

3.  **Add Google Credentials to Supabase:**
    *   Go back to the Google provider settings in your Supabase dashboard.
        **Authentication > SignIn/Providers > Google**
    *   Copy the **Client ID** and **Client Secret** from the Google Cloud Console and paste them into the respective fields in Supabase.
    *   Click **Save**.

## Development

To run the development server:

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Create a `.env` file as described in the **Configuration** section above.
4.  Start the development server: `npm run dev`

## Building the library

To build the library for production, run:

```bash
npm run build
```

This will create the distributable files in the `dist` folder.
