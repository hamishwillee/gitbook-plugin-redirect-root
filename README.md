# gitbook plugin redirect root

This plugin is redirects URLs to the root to any specified language. E.g. if user visits the base URL '/' they will be redirected to specified URL. This can be used to redirect to a particular language URL rather than the language selector.  

### Configuration

The buttons can be configured in **book.json**:

```js
{   
    "plugins": [
        "redirect-root@git+https://github.com/hamishwillee/gitbook-plugin-redirect-root.git"
    ],
    "pluginsConfig": {  
    
        "redirect-to-lang": {
            "url":"https://hamishwillee.gitbooks.io/minimal-test-book-for-testing-gitbook-changes/",
        }
         
    } 
    

}
```

The only config value are:

* url - just the URL you want to redirect to. 
