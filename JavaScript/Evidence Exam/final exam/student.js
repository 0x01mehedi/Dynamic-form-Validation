class Student{

    constructor(name,mobile,email,city,address,gerder,subjects){
        this.name=name;
        this.mobile=mobile;
        this.email=email;
        this.city=city;
        this.address=address;
        this.gerder=gerder;
        this.subjects=subjects;
    }
    
    display(){
        
        let sb="";
            for(let s of this.subjects)
            {
                if(s.checked){
                    sb+=s.value+", "
                }
                
            }

            let gb="";
            for(let g of this.gender){
                if(g.checked){
                    gb=g.value;
                }
                
            }

            let left=window.screen.width/2 - 150;
            let w=window.open("","",`width=300,height=300,top=100,left=${left}`)

            w.document.write(`Name: ${this.name}<br>`);
            w.document.write(`Mobile: ${this.mobile}<br>`);
            w.document.write(`City: ${this.city}<br>`);
            w.document.write(`Email: ${this.email}<br>`);
            w.document.write(`Address: ${this.address}<br>`);
            w.document.write(`Subject: ${sb}<br>`);
            w.document.write(`Gender: ${gb}<br>`);
    }
}

    