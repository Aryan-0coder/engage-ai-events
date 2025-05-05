
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Poppins', 'sans-serif'],
				'serif': ['Playfair Display', 'serif'],
				'mono': ['Consolas', 'Monaco', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					purple: '#6428B4',
					blue: '#3A66DB',
					teal: '#0EA5E9',
					cyan: '#00FFD9',
					light: '#E5DEFF',
					dark: '#1A1F2C'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
				'hero-pattern': 'url("/hero-pattern.svg")',
				'gradient-primary': 'linear-gradient(90deg, hsla(159, 100%, 45%, 1) 0%, hsla(180, 100%, 50%, 0.8) 100%)',
				'gradient-secondary': 'linear-gradient(90deg, hsla(222, 47%, 11%, 1) 0%, hsla(217, 33%, 18%, 1) 100%)',
				'gradient-cta': 'linear-gradient(90deg, hsla(159, 100%, 45%, 1) 0%, hsla(180, 100%, 40%, 1) 100%)',
				'gradient-feature': 'linear-gradient(90deg, hsla(222, 47%, 11%, 0.7) 0%, hsla(217, 33%, 18%, 0.7) 100%)',
				'gradient-tech': 'linear-gradient(45deg, hsla(222, 47%, 11%, 1) 0%, hsla(180, 100%, 50%, 0.2) 100%)',
				'gradient-glow': 'radial-gradient(circle, hsla(159, 100%, 45%, 0.2) 0%, transparent 70%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(0, 255, 217, 0.5)' },
					'50%': { boxShadow: '0 0 25px rgba(0, 255, 217, 0.8)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'pulse-slow': 'pulse-slow 3s infinite',
				'glow-pulse': 'glow-pulse 3s infinite'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
