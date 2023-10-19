class Demo{
    constructor(name,mobile,email,city,subjects,gender,address){
        this.name=name;
        this.mobile=mobile;
        this.email=email;
        this.city=city;
        this.subjects=subjects;
        this.gender=gender;
        this.address=address;
    }
    display(){

        let sb="";
        for(let s of this.subjects){
            if(s.checked){
                sb+=s.value+ ", ";
            }
        }
        let gd="";
        for(let g of this.gender){
            if(g.checked){
                gd=g.value;
            }
        }


        let left=window.screen.width/2 - 150;
        let w=window.open("","",`width=300,height=400, top=100, left=${left}`)



        w.document.write(`Name:${this.name} <br>`)
        w.document.write(`Mobile:${this.mobile} <br>`)
        w.document.write(`Email:${this.email} <br>`)
        w.document.write(`City:${this.city} <br>`)
        w.document.write(`Subjects:${sb} <br>`)
        w.document.write(`Gender:${gd} <br>`)
        w.document.write(`Address:${this.address} <br>`)
    }
}