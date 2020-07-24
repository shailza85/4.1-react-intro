import React from 'react';
//We extend a class to carry all of its properties/methods, and we can add our own for oue new class.
class Hello extends React.Component {
    /**
     * render
     * @summary An expected method for React components.
     * @return (JSX) output objects/strings for when this component is referenced.
     */
    render() {

        /**+
         * We can only return one object at a time.
         * This means we have a wrapper JSX 'element', of if we don't want wrapper.
         * 
         * we can use <></> (a blank element) to get around that.
         * */
        return (
            <>
            <h2>My First Component</h2>
            <p>Hello World!</p>
            </>
        );
    }
}
//In order for Hello to be accessible via import in other files, we have to have an export in this file.
export default Hello;