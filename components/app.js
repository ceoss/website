import Head from 'next/head'
import Header from './header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default (props) => {
    const titleProp = props.title
    const headerProps = props.header || {}

    // Header title defaults to page title, allows false to turn the header off
    if (typeof headerProps.title === "undefined") {
        headerProps.title = headerProps && titleProp
    }

    return (
        <div>
            {/* HTML Head via Next */}
            <Head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="theme-color" content={props.themeColor || "#000000"}/>
                <link rel="shortcut icon" href="/static/favicon.ico"/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <title>CEOSS{titleProp && ` - ${titleProp}`}</title>
            </Head>

            {/* Header */}
            <Header {...headerProps}/>

            {/* App layout */}
            <div style={layoutStyle}>
                {props.children}
            </div>
        </div>
    )
}
