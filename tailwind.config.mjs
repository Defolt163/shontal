/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
			menuItems:{
				DEFAULT: 'var(--menu-items)',
  				foreground: 'hsl(var(--menuText))'
			},
			accentText:{
				DEFAULT: 'var(--accent-text)',
  				foreground: 'hsl(var(--accent-text))'
			},
			secondaryText: {
  				DEFAULT: 'var(--second-text)',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
			globalBackground: {
  				DEFAULT: 'var(--global-background)',
  				foreground: 'var(--global-background)'
  			},
			cardBackground: {
  				DEFAULT: 'var(--card-background)',
  				foreground: 'var(--card-background)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			lightMuted: {
  				DEFAULT: 'var(--light-muted)',
  				foreground: 'var(--light-muted)'
  			},
			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  safelist: [
    'max-[450px]:grid-cols-1',
	'[max-lg]:mb-4',
  ],
  plugins: [require("tailwindcss-animate")],
};
