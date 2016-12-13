#pragma strict

function Update () {

	Camera.main.transform.position.x = GameObject.Find("Player").transform.position.x;
	Camera.main.transform.position.y = GameObject.Find("Player").transform.position.y;

	if(Camera.main.transform.position.x < -19.67){

		Camera.main.transform.position.x = -19.67;
	}

	if(Camera.main.transform.position.x > -1.1){

		Camera.main.transform.position.x = -1.1;
	}

	if(Camera.main.transform.position.y < -2.3){

		Camera.main.transform.position.y = -2.3;
	}

	if(Camera.main.transform.position.y > 20.2){

		Camera.main.transform.position.y = 20.2;
	}
}