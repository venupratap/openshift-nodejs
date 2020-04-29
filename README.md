# khs-example-node-api
API  Example Node.js

#############################
root@ip-172-31-18-174:/opt/openshift-origin-client-tools-v3.9.0-191fece-linux-64bit# history
    1  apt-get update -y
    2  vi /etc/ssh/sshd_config
    3  service sshd restart
    4  passwd root
    5  apt-get update -y
    6  apt-get upgrade -y
    7  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
    8  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    9  apt-get update -y
   10  apt-get install docker-ce -y
   11  systemctl status docker
   12  cd /opt/
   13  wget https://github.com/openshift/origin/releases/download/v3.9.0/openshift-origin-client-tools-v3.9.0-191fece-linux-64bit.tar.gz
   14  tar -zvxf openshift-origin-client-tools-v3.9.0-191fece-linux-64bit.tar.gz
   15  ll
   16  cd openshift-origin-client-tools-v3.9.0-191fece-linux-64bit/
   17  ll
   18  cp oc /usr/local/bin/
   19  oc version
   20  vi /etc/docker/daemon.json
		{
    "insecure-registries" : [ "172.30.0.0/16" ]
        }
   21  systemctl restart docker
   25  oc cluster up --public-hostname=54.218.170.104
   26  oc login -u system:admin
   27  oc cluster down
   28  oc cluster up --public-hostname=54.218.170.104
   29  oc cluster down
   30  oc cluster up --public-hostname=54.218.170.104
   31  oc login -u system:admin
   32  oc project default
   33  oc status
   34  docker ps
   36  oc login
   37  oc new-project dev --display-name="test - Dev" --description="Test Project"
   38  oc new-app centos/ruby-22-centos7~https://github.com/openshift/ruby-ex.git
   39  oc status
   40  oc new-project example --display-name="Sample Node.js External Config App"
   41  oc get pods
   42  oc get svc
   oc get all
   37  oc new-app https://github.com/fmarchioni/ocpdemos.git   --context-dir=nodejs-basic --name=nodejs-basic
   38  oc get services
   39  oc expose service nodejs-basic
   40  oc get services
   41  oc get routes
   42  history

