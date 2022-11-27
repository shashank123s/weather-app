const base = '/';
let apiBase             = "http://143.110.248.218/dev2/machine-task/public/api/";
if (process.env.NODE_ENV === "production") {
    apiBase             = "http://143.110.248.218/dev2/machine-task/public/api/";
}

export const paths = {
    home: base,
    accounts:{
        home: base + 'accounts',
        userList: base + 'accounts/user-list',
        myCity: base + 'accounts/my-city',
        searchCity: base + 'accounts/search-city',
        addcity: base + 'accounts/add-city',
    },
// API's
    api: {
        accounts:{
            login               : apiBase + 'login',
            joinMeList          : apiBase + 'user/list',
            insightList         : apiBase + 'city/list',
            addCity             : apiBase + 'add/city',
        },
    }
}