import service from "@/utils/request.js";

export function getData() {
  return service.request({
    methods: "get",
    url: "https://edu.telking.com/api/?type=month",
  });
}
