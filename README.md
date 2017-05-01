# gitbook plugin redirect to lang

This plugin is supposed to redirect the root to specified language. E.g. if user visits the base URL '/' they will be redirected to a language root ('en/') by default. 

### Configuration

The buttons can be configured in **book.json**:

```js
{   
    "plugins": [
        "redirect-to-lang@git+https://github.com/hamishwillee/gitbook-plugin-redirect-to-lang.git"
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