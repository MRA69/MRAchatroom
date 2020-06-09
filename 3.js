  var emailArray=[];
        var passwordArray=[];
        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var forgetBox = document.getElementById("forgot");

        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            forgetBox.style.visibility="hidden";
            loginTab.style.backgroundColor="rgba(0, 180, 230)";
            regTab.style.backgroundColor="black";
        }

        function regTabFun(){
            event.preventDefault();

            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="hidden";
            regTab.style.backgroundColor="rgba(0, 180, 230)";
            loginTab.style.backgroundColor="black";
        }

        function forTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="visible";

            regTab.style.backgroundColor="rgba(0, 180, 230)";
            loginTab.style.backgroundColor="rgba(0, 180, 230)";

        }


        function register(){
            event.preventDefault();

            var email = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);
                localStorage.setItem('re', JSON.stringify(emailArray));
                localStorage.setItem('rp', JSON.stringify(passwordArray));
                alert(email + "  Thanks for registration. \nTry to login Now");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
                return;
            }
                else{
                alert(email + " is already register.");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;
            var storedemail = localStorage.getItem('re');
            var storedPw = localStorage.getItem('rp');
            var ste= JSON.parse(storedemail);
            var pass= JSON.parse(storedPw);
            if(ste != email){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(pass != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                
                alert(email + " You are login Now \n welcome to MRA CHATROOM.");
                location.href ="tochat/3.html";
                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                         
                return ;

            }

        }
        function forgot(){
            event.preventDefault();
            var email = document.getElementById("fe").value;
            var storedE = localStorage.getItem('re');
            var storedP = localStorage.getItem('rp');
            var st= JSON.parse(storedE);
            var pas= JSON.parse(storedP);
            if(st!= email){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
                    alert("Password is :" +pas);
            document.getElementById("fe").value ="";
        }
