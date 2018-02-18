
node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build('sandbox', '-f Dockerfile.prod .')
    }

    stage('Push image') {
        docker.withRegistry('http://localhost:5000') {
            app.push()
        }
    }
}
