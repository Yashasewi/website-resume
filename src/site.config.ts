import type { SiteConfig } from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

export const siteConfig: SiteConfig = {
	// Author's name for meta tags and OG image
	author: 'Yashasewi',
	// Meta title for the page
	title: 'Resume',
	// Meta description for the page
	description: 'Yashasewi Resume',
	// HTML language attribute for English
	lang: 'en-IN',
	// Open Graph locale for English in India
	ogLocale: 'en_IN',
	// Date formatting options for English in India
	date: {
		locale: 'en-IN',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
}

export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Blog',
		path: '/blog/'
	}
]

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ['dracula', 'github-light'],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
		}
		// return default selector
		return `[data-theme="${theme.name}"]`
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '4px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
	}
}
