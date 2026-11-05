export const appStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --color-1: #f5f5f5;
    --color-2: #fffac3;
    --color-3: #0e47a1;
    --color-4: #bcd1e7;
    --color-5: #de714a;
    --color-6: #335a9a;
    --color-7: #a95936;
    --color-8: #ec974f;
    --color-9: #e2b588;
    --color-10: #cd5254;

    --primary: #0e47a1;
    --primary-hover: #335a9a;
    --secondary: #de714a;
    --accent: #ec974f;
    --accent-light: #fffac3;
    --background: #f5f5f5;
    --dark: #0a1f3d;
    --muted: #536b88;
    --success: #22c55e;
  }

  @theme {
    --color-color-1: #f5f5f5;
    --color-color-2: #fffac3;
    --color-color-3: #0e47a1;
    --color-color-4: #bcd1e7;
    --color-color-5: #de714a;
    --color-color-6: #335a9a;
    --color-color-7: #a95936;
    --color-color-8: #ec974f;
    --color-color-9: #e2b588;
    --color-color-10: #cd5254;

    --color-primary: #0e47a1;
    --color-primary-hover: #335a9a;
    --color-secondary: #de714a;
    --color-accent: #ec974f;
    --color-accent-light: #fffac3;
    --color-background: #f5f5f5;
    --color-dark: #0a1f3d;
    --color-muted: #536b88;
    --color-success: #22c55e;
  }

  html {
    scroll-behavior: smooth;
    font-family: 'Cairo', system-ui, sans-serif;
  }

  body {
    background-color: var(--color-1);
    color: var(--dark);
  }

  .mesh-gradient {
    background: radial-gradient(circle at 0% 0%, rgba(14, 71, 161, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 100% 100%, rgba(222, 113, 74, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(255, 250, 195, 0.3) 0%, transparent 60%);
  }

  .pattern-bg {
    background-color: #f5f5f5;
    background-image: radial-gradient(#0e47a1 0.6px, transparent 0.6px), radial-gradient(#0e47a1 0.6px, #f5f5f5 0.6px);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
    opacity: 0.04;
  }

  .glass {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(188, 209, 231, 0.4);
  }

  .shimmer {
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .drop-shadow-glow {
    filter: drop-shadow(0 0 20px rgba(236, 151, 79, 0.35));
  }
`;
