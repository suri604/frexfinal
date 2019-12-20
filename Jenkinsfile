pipeline {
    agent any
    environment {
        repo_path = '$(basename $PWD)'
        dev_branch = 'streak3'
        prod_branch  = 'master'
        folder_name_prod = 'Frex/prod'
        folder_name_dev = 'Frex/dev'
        workspace_dir_dev = 'Frex/dev/gamification-claim-rewards'
        workspace_dir_prod = 'Frex/prod/gamification-claim-rewards'
        private_ip = '10.20.1.11'
    }
    stages {
        stage('Sync') {
            steps {
                script{
                    echo "branch..." + env.GIT_BRANCH
                    if(env.GIT_BRANCH == dev_branch){
                        sh 'ssh ubuntu@${private_ip} "rm -rf ${folder_name_dev}; mkdir ${folder_name_dev};"'
                        sh 'ssh ubuntu@${private_ip} "cd ${folder_name_dev}; git clone git@gitlab-cgi.stackroute.in:cgi-wave14/gamification-claim-rewards.git;"'
                        echo 'development...'
                        sh 'ssh ubuntu@${private_ip} "cd ${workspace_dir_dev}; git checkout ${dev_branch}"'
                    }
                    if(env.GIT_BRANCH == prod_branch){
                        sh 'ssh ubuntu@${private_ip} "rm -rf ${folder_name_prod}; mkdir ${folder_name_prod};"'
                        sh 'ssh ubuntu@${private_ip} "cd ${folder_name_prod}; git clone git@gitlab-cgi.stackroute.in:cgi-wave14/gamification-claim-rewards.git;"'
                        echo 'production...'
                        sh 'ssh ubuntu@${private_ip} "cd ${workspace_dir_prod}; git checkout ${prod_branch}"'
                    }
                }
            }
        }
        stage('Set Up') {
            steps {
                script{
                    if(env.GIT_BRANCH == dev_branch){
                        sh 'ssh ubuntu@${private_ip} "cd ~/${workspace_dir_dev}; source build-script.sh"'
                    }
                    if(env.GIT_BRANCH == prod_branch){
                        sh 'ssh ubuntu@${private_ip} "cd ~/${workspace_dir_prod}; source build-script.sh"'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script{
                    if(env.GIT_BRANCH == dev_branch){
                        sh 'ssh ubuntu@${private_ip} "cd ~/${workspace_dir_dev}; source test-script.sh"'
                    }
                    if(env.GIT_BRANCH == prod_branch){
                        sh 'ssh ubuntu@${private_ip} "cd ~/${workspace_dir_prod}; source test-script.sh"'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script{
                    echo env.GIT_BRANCH
                    if(env.GIT_BRANCH==prod_branch){
                        sh 'ssh ubuntu@10.20.1.11 "cd ~/${workspace_dir_prod}; source deploy-script.sh"'
                    }
                }
            }
        }
        stage('Status Check') {
            steps {
                script{
                    echo env.GIT_BRANCH
                    if(env.GIT_BRANCH==prod_branch){
                        sh 'ssh ubuntu@10.20.1.11 "cd ~/${workspace_dir_prod}; source deployStatus-script.sh"'
                    }
                }
            }
        }
    }
}
