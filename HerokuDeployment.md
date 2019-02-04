Steps for heroku deployment :

1. Create a Github repository for the project(website:frontend+backend) which you want to deploy on heroku.
2. Make sure you have installed Heroku CLI, if yes then move on to the next step.
3. Make sure you are inside terminal of that repository which you want to deploy. Example : cd/repo_to_be_deployed
4. Do [ heroku apps : create my-first-app ] , this will create a website for the current project.
5. Also, server should start on process.env.PORT || 3333
6. Now do [git push heroku master] to push all the changes of the heroku project,it will be reflected in the website also.
