var colors = ['#424242', '#EB8174', '#218872', 'rgb(238, 105, 17)']
var random_color = colors[Math.floor(Math.random() * colors.length)];

var style = {
    nav: {

    },
    
    logo: {
        width: '300px',
        height: 'auto'
    },

    logoText: {
        'fontFamily': 'Helvetica, sans serif',
        'color': random_color,
        'fontSize': '9vw',
        'textAlign': 'center'
    },

    spacer: {
        'padding': '5px'
    },

    logoSpacer: {
        padding: '12.5vw'
    },

    navLink: {
        color: 'black',
        'textDecoration': 'none',
        'textAlign': 'center',
        'fontFamily': 'Helvetica, sans serif'
    },

    'navLink:hover': {
        backgroundColor: '#EB8174'
    },

    navItems: {
        textAlign: 'center'
    },

    tagLine: {
        'textAlign': 'center',
        'fontFamily': 'Helvetica, sans serif'   
    }
}


export default style;