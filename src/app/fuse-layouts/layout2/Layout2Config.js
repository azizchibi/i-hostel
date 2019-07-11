const config = {
    title   : 'Layout 2 - Horizontal',
    defaults: {
        mode          : 'fullwidth',
        scroll        : 'content',
        navbar        : {
            display: true
        },
        toolbar       : {
            display : false,
            position: 'below'
        },
        footer        : {
            display: false,
            style  : 'fixed'
        },
        leftSidePanel : {
            display: true
        },
        rightSidePanel: {
            display: true
        }
    },
    form    : {
        mode   : {
            title  : 'Mode',
            type   : 'radio',
            options: [
               
                {
                    name : 'Container',
                    value: 'container'
                }
            ]
        },
        navbar : {
            type    : 'group',
            title   : 'Navbar',
            children: {
                display: {
                    title: 'Display',
                    type : 'switch'
                }
            }
        },
        toolbar: {
            type    : 'group',
            title   : 'Toolbar',
            children: {
                display : {
                    title: 'Display',
                    type : 'switch'
                },
                position: {
                    title  : 'Position',
                    type   : 'radio',
                    options: [
                        {
                            name : 'Above',
                            value: 'above'
                        },
                        {
                            name : 'Below',
                            value: 'below'
                        }
                    ]
                }
            }
        },
        footer : {
            type    : 'group',
            title   : 'Footer',
            children: {
                display: {
                    title: 'Display',
                    type : 'switch'
                },
                style  : {
                    title  : 'Style',
                    type   : 'radio',
                    options: [
                        {
                            name : 'Fixed',
                            value: 'fixed'
                        },
                        {
                            name : 'Static',
                            value: 'static'
                        }
                    ]
                }
            }
        }
    }
};

export default config;
