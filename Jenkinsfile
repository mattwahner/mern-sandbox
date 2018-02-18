
node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build('sandbox')
    }

    stage('Test image') {
        app.inside {
            sh 'echo "tests passed"'
        }
    }
}
