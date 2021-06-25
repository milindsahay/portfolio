import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineIcon from "./TimelineIcon";

const Experience = () => {
  return (
    <div className="timeline-container">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2020 - Present"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<TimelineIcon src="https://indiaeducationdiary.in/wp-content/uploads/2020/08/Flipkart.jpg" />}
        >
          <h3 className="vertical-timeline-element-title">Flipkart</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Developer
          </h4>
          <p>
            Working as a part of the Fulfillment team, designing and developing
            highly scalable systems on Flipkart's cloud, facilitating the supply
            chain nationally.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2020"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<TimelineIcon src="https://www.collegesignal.com/images/colleges/cz_5933503a584f2170438/logo/dtu_logo-m6921-original.png" />}
        >
          <h3 className="vertical-timeline-element-title">
            Delhi College of Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Technology
          </h4>
          <p>Electronics and Communication Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2019 - Apr 2020"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<TimelineIcon src="https://i.ibb.co/0hqXpt7/centricwave.png" />}
        >
          <h3 className="vertical-timeline-element-title">
            Centricwave Infotech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Machine Learning Intern
          </h4>
          <p>
            Worked on Credit card fraud detection and Stock market prediction
            and trained various neural network architectures such as
            Encoder-Decoder network, LSTM networks, Fbprophet model.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jun 2019 - Aug 2019"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<TimelineIcon src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQEBIVFRITFRUVERYXFRUSEhAWGRUYFxUaFhYYHSggGBsmGxUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLy0tLS0tLy8tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUDAv/EADwQAAIBAQQFCQYFBAMBAAAAAAABAgMEBRExBhIhQWETIkJRcYGRobEjMlJicsEHFDOS0UNTstKCosIW/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQYCAf/EADERAAIBAgIHCAMAAwEBAAAAAAABAgMEETEFEiFBUWFxEyKBobHB0fAykeEUI0IkFf/aAAwDAQACEQMRAD8AvEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1a1qjGcKbfOqY6q34RWLb4bu8+NpZn1JvI2gAfT4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGIBq2+2Qo05VajwjFYv7JcW9hGdEq07RaK1rqZJKnTW6CbxwXdh4s4ml1+O0VOSpvGlB4LD+pLLHs3Im+j13fl7PCn0sNaf1Pa/wCO4oxqdtXwj+MfN5fJqzof4trjL857Okc34vZ6HVABeMoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwyG6b39qJ2ak+fL9VroxfR7X6dp19J77jZaezB1J4qnH1k+CKyo0qlaoorGdSpLfm282/NmdfXOquzjm8+X9Zs6KslN9vU/FZc8N/Rep3tB7p5atysl7Ojt4Sn0V3Z+BZSNC5LujZ6MaUd22T+KTzZ0Cxa0OxpqO/eUr66/yazluyXQAAslMAAAAAAAAAAwzhaR3tVs8caVCU9m2eGMIdqW30XE8TmoR1n8klKnKpNQjm+aXqd4FQW6/bVW/UqywfRi9VeCNCNWSeKbT602n4me9Jx/5jj4m1DQU8O9NJ9MfPYXcCsrk0ur0Wo1W6lPem8Zx+mTz7H5Fi2S1QqwVSm9aMlimt5boXMKy7ufAzLuyqWzSnk8msvk2ACP37pB+VrU41IY0pxbcl70Wng9m9bUSzqRgtaWRBSpTqy1ILFkgBr2W0QqQU6bUoy2prJmwe1tPDTTwYAAPgAAAAAANK9LfCz05Vaj2JbFvk9yXFnvaK0YRc5tKMU3JvJJZlW6SXzK1VcI46kXhTjvfFr4mVrq4VGPN5IvWFm7mph/ys37dWad526paarnLa5PCKW3VXRikT3RDR/wDLx5WovbTWX9uPV29Zr6JaMclhXrr2vQjup8X83oS5le0tWn2tTP7mW9I38ZLsKP4rY8N/JcvXoEZOLfmkFGyrCT1qj92CzfF/Cj60ctVWtRVatgnUlJxSWCjDKK8sceJd7WOvqLP0MzsKipdq13ccOvQ7AAJCEAAAAAAAAAGGZABHL60UoV05QXJ1PiilqyfzR39uZAb2uitZpatSOCfuyW2E+x/Zlwmva7NTqxcKkVKLzTKdeyhU2x2P7madnpOrQwjLvR810fsUuSrQO93Cp+Xm+ZU9z5Z/w15pHjpNotOhjVpYyo798ofV1rj4kdpzcWpReDTTT6mtqMha9vVTea9DopKle0GovFPye7o8S7iC/iWttDsqf+SW3Va1Wo06q6cU3wfSXjiRD8SnzqK4T/8AJr3rTt21y9Uc3o2LjeRi8+96M0tA70lTrcg3zKuS+GaWKa7UsPAshFRaNRcrVQSz5SD7k8X5Jluoj0dJuk09zJ9NU4xrqSzaxf7aMgA0DHAAABhjEiekl41a03YrJzpv9aSygsmnLdxfcR1aipxxfgt75ImoUJVpaq2b23klxZxtK78laKn5az4ygpYPDOrLh8q+2J3NFtF40MKtZKVbcs40uzrlx8Dc0e0epWWOPvVWudPDLhFbl6i+tJKFnxWOvU+CLy+p5R9SpCkovtq72+SNCpcOpFWtonq+cub4L7lsOzVqxinKTUYra23gl3kKv/TTOnZex1Wv8E/Vkbvm/a9peM5YR6MFsgv5fFnhdl21bRNU6ccXvfRguuT3FavfSqPVpf3+evQvWuiqdFdpcNPDduXXj9zPa57BUtddQxbxetUm8W1He23v3dpbNnoxhFQisIxSUV1JLBHPuG6Kdmp6kdsntnLfJ/ZdSOsXbS27GO3N5mXpG9/yZ938Vl99uAABbM8AAAAAAHnUqqKcpNJLNt4Jd7Na8rbChTlVnlFY8W8klxbwRVl8XzWtM9ab5vRivdguC3viVbm6jR2YYvgX7KwnctvHCKzfsixLRpVY4bHWUvoTn5pYGt/9tY+uf7CszJnPSNXcl+n8m1HQtultcn4r4LQo6X2KX9RrthJfY6FnvizVNkK9Nvq1kn4PaU/gbllum0Vf06M5Lr1ZJeL2HuOkarf4p9Mf6R1dC0Esddx64YexcDSa60+9Mr/S3Rjk8a9BezznD4OK+X07Mvq6tHbzhhqVeSXU6ja/bHFEtu6jaY820VadRNbqbjJ9e3WwfgWZf+mOrODXB7PvkZ8X/hT16VWMuK27V4Y+px/w8tWtQnSedOePdLb6qRyfxHqe2px+Gnj4yf8AqSG7Ln/LWmcqf6NWD2f25qSaXZg5YeBH7fds7bb5pYqlTcYzn8KUVil8zeJFVjNW6pYd7HD9fwsW9Sk72VdPu6ut0xwT8cXlvPb8PbrbcrVJbFjCnxfSfdl4k7R42WzxpwjTgsIxSUV1I9y9QoqlBRRl3dy7iq6j8Om4AAmKwBjE4t7aSWaz4qUtafwQ50u/cu88ynGCxk8D3TpzqS1YLF8jct8aklqUnquXvVM9Rb9Vb5dW5Z8HzalssdghyafOzaXPqzfXLjxZEr10wtNbGNN8lDqi+e+2f8YHJsV2V679nTlPHN4bO+T2GZUvk5f6o4v7kszcoaJah/6Jasc8E15vL18DsX1phWrYxp+yp8HjN9st3d4kcim3gsW3ks239yY3boJN4O0VFFfDDnS/c9i8GSy7bls9n/Sgk98ntm/+TI42letLWqPDr8E0tI2lrHUoLHpsXi3n5kJuXQyrUwlXxpQ6v6ku7o9/gTy77BSoQVOlFRj5yfW3vZtsYmlRtoUV3c+Ji3V7WuX33s4LIyDGJknKgAAAAAAAABCPxHtbwpUVk25y7tkfVkFLA0quKtarRDUSUFTSlN+7F60tiWbZ0bp0Ws1DBuPKT+Ke1J/LHJepkVrWpWryeS4s6K2v6FrawjnLPBc3v4bMCB3Zo/aa+2nTaj8UubHz2vuTJRd+gkFg69Rye+MObH9zWL8iZJGUWaVhShnt6/BRr6XuKn491cs/2/bA51iuWzUv06ME10mtaX7ntOhia9uttOjB1KklGKzb9Et74FdaRaU1LRjCGMKPVlKX1NbuBLWr06EcN+5IgtrSteTxx2b2/u18kSG/NMIU3ydnXKVMtbOEX1LD3n2bDo3RRlRhGpaJOVarKMZN9HW92EdyS4cSNaCXNrz/ADM1zYPCmvins293r2HW0vvDUrWWCeVVVJdiaivWRXp1ZuHb1OWC3Z4ff6XKtCkqitaPNye94LHDlhv/AISs17NZYU1qwWCbcn1yk3jJvrbZz76ts6CVdLXpLZWiveinlOPY9jXFdR707zVSnytnXLLqUlCXZhLJ8HgXteOtqvNenLiZXZT1FPc/Xg+HidFGSL2vTCNJ6tWz14PiorHseOD7jX/+9of2qv8A0/kid3RTwciytHXTWKg8PD5Je2ci23yo82lSqVp/JF6ifGb2eGJxnp7Q/s1PGP8AJ4z09j0aD75peiPE7ulhsn5Mkho64T71PHxS9z0tdmvW07JONCm+jr4PDi44t+R52LQKK21qzfCCwXjLH0PCen0+jQiu2bf2NeendofuwpLuk/uVHO0bxm3J88fhL9GgqWkEtWnGMFya9cW/Mllh0aslLbGkpNb589+Z2OBWFbTC2Symo/TCP3TNCtftrn71ep3Scf8AHA9q/ow2Qi/0kRPRFzUeNSa/bfsW3UqxjtlJJcWkc60aRWOn71eGPVF67/64lT1Kjltk3J8W2/M+cSN6Sl/zHzf8J4aDgvzm/BYfJYdp06sy/ThUm+6EfN4+RxrVpxaZ7KUIQxyzlLxezyIqSXQq5nVqqtJeypPH65rJLszfYiJXNxWkoJ4Y8CxKys7Wm6ko44cXj/NvQsKyRkoQU3jLVjrPrlhtfibJgybhygAAAAAAAABgyAADQvW8qdnpupUezJLpSe5Jb2e9qtEacHUm8IxTcn1Iqq/73naqrnLZBYqEfhX8veVbq5VGOzN5fJfsLJ3U9v4rP4X3YYvy+atqnrTeEV7sF7sF93xNa7bFKvVjShnJ4Y/Ct7fBLaapP/w/uvVg7RJc6fNhwgntfe15GPRpyuKuD359DpLqrC0t24rDDYlz3fLJRYrJClTjTgsIxSS/l8SuNN7Tr2uWHQUYLtSxfnJlolM3rX5StVn8VSb7tZ4GhpJ4U4xXH0MfQkdatKb3L1ePsy2qEo1qMW1jGrTTa61KOL9Su7dGvd9ofJSai9scdsakOqS3tZde/eTPQ60a9kp/KnD9raXlge2kV0RtNJwymttOXVL+HkS1qbrUozj+S2r4K1tWVrXnSqbYN4NdHsfh6Gnc9/We1x5OpGKm86c8GpfTj73Zmed4aGWWptjrUpfK8Y/tf2wK6q0p05uLTjODwe5xaJXcOmco4U7VjKOSmts4/UukuOfaVad1Tqd2uljx+eBfr6Pq0H2lpJ4cF7bmuXqeNu0GtEdtKUKi6vcl4PZ5nCtV02il+pRnHjqtx/cthblmtEKkVOnJSi8mnime7Jp6OpS2xeHmvMr09NV47JpPyf3wKQQLitN12ep+pSpy4uKx8TnV9EbFL+m4/TKS+5Xlo6e5p+Rdhpyk/wAotfp/BVpkseWg1keUqq74v1iYWgtl3zqv/lD/AFI//n1uX7Jv/sWvP9f0rk+qdNyerFNyeSSbb7EizLPofY45wcvqm/tgdiy2GjSWFKnGC+WKRJHRs3+TS8/ggq6cpJdyLfXZ8sglx6GVKjU7RjThnq/1Jf6+pPrLZ4U4qFOKjGKwSWSPZGTSoW8KKwj+zEuryrcvGb2bksvvNgAE5VAAAAAAAAABhmTDAIH+IV5tyjZYvYsJ1OL6K7s+9EMN6/a7qWirN76ksOxPBeSNE5u4qOpUk+Z21nRVGhGC4Yvq9ps3XYpV6sKUc5SSfBZyfgmXBZ6EYRjCKwjFJJdSSwRDfw6u737TJfJD1k/ReJOTV0fS1aeu836HP6Yr69bs1lH13+Ww8LTU1YSl8MW/BYlKlx3xLChWfVSqf4sp1lfST70V1Lmgl3Kj5ryxJ3+HNrxhVpPdJTXY1g/8V4k0Kv0ItfJ2qKeVRSg+/nLzivEtBFqwnrUUuGwz9LUtS5b4pP580RPTG4OWjy1Je1iucl/Uiv8A0vPwK8wLvZBtMdGc7RQjxqwS8ZRXqiC+tMf9kPFe/wAlvRWkNX/RVezc+HL4Irdl6VrPLWpSw61nGX1LeT25NLqNbCFX2VTi+ZLslu7GVsYKNG6nR/HLga11YUrjbJYS4rPx4l4IyVRc2ktos+EVLXp/DJtpfS84+nAnN0aT2a0YR1uTqPoT2Y/S8n6mvRvKdTZk+D+4HOXWja9DbhjHivdbvTmd4GEZLZngAAAAAAAAAAAAAAAAAAwzIAKf0hsrpWmrF/HJripPWXkznxXV3Fj6ZaPuvFVaS9rBYNf3I54dq24dpD9FrFr2unGS92TlNPNam3b34I5+vbyhV1Vvezx+DsLS9hUtu03xW1dF77v0WTcliVChTpb4xWtxk9svNs6BhGTfilFJLcchKTlJyebNO9VjQqrrp1F/1ZTZdlSmmmnk00+8patScJODzi3F9qeBlaTW2L6+x0GgpbKkej9RZ6rhKM45xkpLtTxRc1jrqpCNSOU4qS71iUqWRoDbtez8k3zqUmv+MudH7ruPGjamE3Dj7fwk03RxpRqLc8PB/wB9SUmGZBsnNEJ0o0T1sa1mXOznTWUutx48CCyi08GsGtjT2NPsLvwOFf2jdG0873Ku6aWf1Lf6mbc2Os9annw+5G1Y6WdNKnW2rc96+fXqVYEde9dHbTZ8XKDlD444yj37495yUZE4OLwksDo6dSNSOtB4rkdq6dJ7TQwSlrw+Ge3wlmiY3XpjZquCm+Tn83ud0svHArM9KNKU5KEIuUnkkm2+5Fmjd1aexPFcH9xKdzo23rYya1XxWz97vIumnUTWKaaeTTxTPQiuh9w1aC16s5JtbKak9SPGSycvQlRuUpSlFOUcHwOTrwhCbjCWsuIABIRAAAAAAAAAAAAAAAA042CkqrrKCVRxcXJbG1int68ltNwHxpM+ptZAAH0+Aq/TiwOlaXNLm1eeu3Ka8dveWgcfSO6I2mk6eU1zqcvhlx4PIrXdHtaeCzW1F7R90respSyex/PgVOd7Qm38laYxfu1fZy7X7r8dnece2WWdKbp1IuLjmn6rrXE8otras1lwMGEnTmpb0zratONak4vKSLuRk5ej14KvQhU6WGrPhJbH/PedQ6aMlJJo4acJQk4yzWxgAH08mGc613JZajxqUYN9eGD8VtOkD44qWxnqM5ReMXh0OFHROwp48j4ym16nSsdhpUlhSpxgvlSWPa95tg8xpwjtikvA9TrVJ7JSb6tmMDIB7IwAAAAAAAAAAAAAAAAAAAAAAAAYwMgA0LzuqhaFq1YKWGTylHsktqI1aNAqbfs60kuqUVLDvWBNAQ1LenUeMkWaN3WorCnJpcN36OBo5cMrJrrldeM8Hq6uqk1vze7Z3I7yRkHunTjTjqxyIqtWdWbnN4tgAHsjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=" />}
        >
          <h3 className="vertical-timeline-element-title">Career Launcher</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Data Science Intern
          </h4>
          <p>
            Designed and built a real time adaptive question recommender system
            using exploratory data analysis and user based collaborative
            filtering.Trained and designed a machine learning model using the
            leads generated from user's online activities by rigorous data
            cleaning and extracting relevant features to predict future probable
            customers.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<TimelineIcon src="https://i.ibb.co/QCmPFhr/star.jpg" />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
