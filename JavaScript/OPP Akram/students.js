class Student{
    constructor(name,email,phone,city,subjects,gender,address){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.city=city;
        this.subjects=subjects;
        this.gender=gender;
        this.address=address;
    }
    display(){
        let left=window.screen.width/2 - 150;
        let w=window.open("","",`width=300 height=400 left=${left} top=100`);

        let subjects="";
        for (let sub of this.subjects){
            if(sub.checked){
                subjects+=sub.value+",";
            }
        }

        let gender="";
        for (let gen of this.gender){
            if(gen.checked){
                gender+=gen.value;
            }
        }

        w.document.write(`
            Name: ${this.name}<br>
            Email: ${this.email}<br>
            Phone: ${this.phone}<br>
            city: ${this.city}<br>
            Subjects: ${subjects}<br>
            Gender: ${gender}<br>
            Address: ${this.address}<br>
        `)
    }
}