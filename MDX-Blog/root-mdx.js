import React from 'react'
import {MDXProvider} from '@mdx-js/react'

const components = {
h3:()=><span>og du troede at du ville få en h3</span>
}

export const wrapMDX = ({element}) => {
    return <MDXProvider components={components}>{element}</MDXProvider>
}