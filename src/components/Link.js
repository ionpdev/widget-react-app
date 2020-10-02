import React from 'react'

const Link = ({ className, href, children }) => {
 
    const onClick = event => {

        if (event.metaKey || event.ctrlKey) {
            return
        }
        //on each Link click to not do a full page reload
        event.preventDefault()
        //change the url, withoug causing a full page refresh
        window.history.pushState({}, '', href)
        //change the date after url was changed
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    )
}

export default Link