import tagline from '../tagline/index'

const taglineStyles = {
	all: "unset",
	textTransform: "capitalize",
	userSelect: "none",
	cursor: "pointer",
}

const Tagline = () => (
	<div>
		<button style={taglineStyles}>{tagline()}</button> small, clickable, cursor, highlightable
		<div>Open Source Software (in small font, spaced nicely)</div>
	</div>
)

export default Tagline
