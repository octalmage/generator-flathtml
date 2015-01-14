var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var flathtmlgenerator = yeoman.generators.Base.extend(
{
    initializing: function () 
    {
        this.pkg = require('../package.json');
    },

    prompting: function () 
    {
        var done = this.async();

        var prompts = [
            {
                name: 'siteTitle',
                message: 'What is your site\'s title?',
                default: 'My App'
            }
        ];

        this.prompt(prompts, function (props) 
        {
            this.siteTitle = props.siteTitle;
            done();
        }.bind(this));
    },


    files: function () 
    {
        var context = 
        {
            site_title: this.siteTitle
        };
        this.template('www/_index.html', 'index.html', context);
    },

    end: function () 
    {

    }
});

module.exports = flathtmlgenerator;
