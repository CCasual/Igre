#pragma strict

public var prefab : GameObject;
public var cam : Camera;

function Start () {

	for(var tla = 1; tla < 11; tla++){

		Instantiate(prefab, new Vector3( -34.6 + (tla * 4.84), -12.89, 0), Quaternion.identity);
	}

	for(var levo = 1; levo < 10; levo++){

		Instantiate(prefab, new Vector3(-34.6, -12.89 + (levo * 4.84), 0), Quaternion.identity);
	}

	for(var strop = 1; strop < 11; strop++){

		Instantiate(prefab, new Vector3(-34.6 + (strop * 4.84), -12.89 + (9*4.84), 0), Quaternion.identity);
	}

	for(var desno = 1; desno < 10; desno++){

		Instantiate(prefab, new Vector3(-34.6 + (10 * 4.84), -12.89 + (desno * 4.84), 0), Quaternion.identity);
	}

	for(var vmesna = 1; vmesna < 8; vmesna++){

		Instantiate(prefab, new Vector3(-34.6 + (vmesna * 4.84), -12.89  + (4 * 4.84), 0), Quaternion.identity);
	}

	for(var stolpec1 = 1; stolpec1 < 3; stolpec1++){

		Instantiate(prefab, new Vector3(-34.6 + (3 * 4.84), -12.89 + stolpec1 * 4.84, 0), Quaternion.identity);
	}

	for(var stolpec2 = 1; stolpec2 < 3; stolpec2++){

		Instantiate(prefab, new Vector3(-34.6 + (6 * 4.84), -12.89 + (stolpec2 +1) * 4.84, 0), Quaternion.identity);
	}

	for(var stolpec3 = 1; stolpec3 < 3; stolpec3++){

		Instantiate(prefab, new Vector3(-34.6 + (3 * 4.84), -12.89 +  (stolpec3 + 6) * 4.84), Quaternion.identity);
	}

	for(var stolpec4 = 1; stolpec4 < 3; stolpec4++){

		Instantiate(prefab, new Vector3(-34.6 + (6 * 4.84), -12.89 + (stolpec4 + 4) * 4.84), Quaternion.identity);
	}
}