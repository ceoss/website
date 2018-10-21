import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import App from '../components/app'
import Tagline from '../components/tagline'
import {Button, TextField} from '@material-ui/core'




const Index = () => (
    <div>
        <App title="Home" header={{"title": false}}>
           <h1>CEOSS</h1>
           <Tagline/>
           <Button>Test</Button>
        </App>
    </div>
)

export default Index
