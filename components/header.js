import Link from 'next/link'
import {Button, AppBar, Toolbar, Typography} from '@material-ui/core'

const buttonStyle = {

}

const Header = (props = {}) => (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                    {props.title !== false && <span>{props.title || "CEOSS"}</span>}
                </Typography>
                <div role="navigation" aria-label="Main navigation">
                    <Link href="/">
                        <Button component="a" color="inherit">Home</Button>
                    </Link>
                    <Link href="/about">
                        <Button component="a" color="inherit">About</Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    </div>
)

export default Header
