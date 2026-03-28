function openVC() {
	var body = document.querySelector("img.closeCookie");
	body.style.animation = "shake 0.8s";

	setTimeout(() => {
		body.src = "/images/fortune-cookie-text1.png";
		body.classList.add("opened");

		var quote = [
			"작은 용기가 큰 행운을 부릅니다.",
			"지금 이 순간이 가장 좋은 시작입니다.",
			"당신의 미소는 세상을 밝게 합니다.",
			"두려움이 클수록 기회도 큽니다.",
			"오늘의 노력은 내일의 보물이 됩니다.",
			"행운은 준비된 자에게 찾아옵니다.",
			"모든 끝은 새로운 시작입니다.",
			"당신은 생각보다 훨씬 강합니다.",
			"작은 친절이 세상을 바꿉니다.",
			"당신이 걷는 길이 곧 길이 됩니다.",
			"진심은 언제나 통합니다.",
			"포기하지 않는 것 자체가 재능입니다.",
			"오늘의 실패는 내일의 교훈입니다.",
			"당신의 꿈은 틀리지 않았습니다.",
			"소금과 설탕은 겉모습이 같습니다. 믿을 사람을 신중히 고르세요.",
			"멀리 온 만큼, 앞으로도 갈 수 있습니다.",
			"침묵 속 함께 있는 것만으로도 충분한 사람이 있습니다.",
			"모든 좋은 것은 적절한 때에 옵니다.",
			"꽉 쥐어야만 하는 것은 놓아주세요.",
			"그녀는 쓸 수 없는 시를 삶으로 삽니다. (오스카 와일드)"
		];

		var options = Math.floor(Math.random() * quote.length);
		document.getElementById("cookieText").innerHTML = quote[options];
		document.getElementById("goodbyeText").innerHTML = "방문해 주셔서 감사합니다. 또 찾아오세요 🍪";

	}, 1000);
}
